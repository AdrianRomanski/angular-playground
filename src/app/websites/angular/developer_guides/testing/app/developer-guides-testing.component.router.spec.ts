// For more examples:
//   https://github.com/angular/angular/blob/main/packages/router/test/integration.spec.ts

import {Location} from '@angular/common';
import {provideLocationMocks, SpyLocation} from '@angular/common/testing';
import {DebugElement, Type} from '@angular/core';
import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {provideRouter, Router, RouterLink, RouterModule} from '@angular/router';

import {asyncData, click} from '../testing';

import {AboutComponent} from './about/about.component';
import {routes} from './developer-guides-testing-routing.module';
import {DeveloperGuidesTestingComponent} from './developer-guides-testing.component';
import {DeveloperGuidesTestingModule} from './developer-guides-testing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroService, TestHeroService} from './model/testing/test-hero.service';
import {TwainService} from './twain/twain.service';

let comp: DeveloperGuidesTestingComponent;
let fixture: ComponentFixture<DeveloperGuidesTestingComponent>;
let page: Page;
let router: Router;
let location: SpyLocation;

describe('DeveloperGuidesTestingComponent & router testing', () => {
  beforeEach(waitForAsync(() => {
    TestBed
        .configureTestingModule({
          imports: [
            DeveloperGuidesTestingModule,
            RouterModule.forRoot(routes),
          ],
          providers: [{provide: HeroService, useClass: TestHeroService}, provideLocationMocks()]
        })
        .compileComponents();
  }));

  it('should navigate to "Dashboard" immediately', fakeAsync(() => {
       createComponent();
       tick();  // wait for async data to arrive
       expectPathToBe('/dashboard', 'after initialNavigation()');
       expectElementOf(DashboardComponent);
     }));

  it('should navigate to "About" on click', fakeAsync(() => {
       createComponent();
       click(page.aboutLinkDe);
       // page.aboutLinkDe.nativeElement.click(); // ok but fails in phantom

       advance();
       expectPathToBe('/about');
       expectElementOf(AboutComponent);
     }));

  it('should navigate to "About" w/ browser location URL change', fakeAsync(() => {
       createComponent();
       location.simulateHashChange('/about');
       advance();
       expectPathToBe('/about');
       expectElementOf(AboutComponent);
     }));

  // Can't navigate to lazy loaded modules with this technique
  xit('should navigate to "Heroes" on click (not working yet)', fakeAsync(() => {
        createComponent();
        page.heroesLinkDe.nativeElement.click();
        advance();
        expectPathToBe('/heroes');
      }));
});


///////////////

import {HeroModule} from './hero/hero.module';  // should be lazy loaded
import {HeroListComponent} from './hero/hero-list.component';

///////// Can't get lazy loaded Heroes to work yet
xdescribe('DeveloperGuidesTestingComponent & Lazy Loading (not working yet)', () => {
  beforeEach(waitForAsync(() => {
    TestBed
        .configureTestingModule({
          imports: [
            DeveloperGuidesTestingModule,
          ],
          providers: [
            provideRouter(routes),
          ]
        })
        .compileComponents();
  }));

  beforeEach(fakeAsync(() => {
    createComponent();
    router.resetConfig([{path: 'heroes', loadChildren: () => HeroModule}]);
  }));

  it('should navigate to "Heroes" on click', waitForAsync(() => {
       page.heroesLinkDe.nativeElement.click();
       advance();
       expectPathToBe('/heroes');
       expectElementOf(HeroListComponent);
     }));

  it('can navigate to "Heroes" w/ browser location URL change', fakeAsync(() => {
       location.go('/heroes');
       advance();
       expectPathToBe('/heroes');
       expectElementOf(HeroListComponent);
     }));
});

////// Helpers /////////

/**
 * Advance to the routed page
 * Wait a tick, then detect changes, and tick again
 */
function advance(): void {
  tick();                   // wait while navigating
  fixture.detectChanges();  // update view
  tick();                   // wait for async data to arrive
}

function createComponent() {
  fixture = TestBed.createComponent(DeveloperGuidesTestingComponent);
  comp = fixture.componentInstance;

  const injector = fixture.debugElement.injector;
  location = injector.get(Location) as SpyLocation;
  router = injector.get(Router);
  router.initialNavigation();
  spyOn(injector.get(TwainService), 'getQuote')
      // fake fast async observable
      .and.returnValue(asyncData('Test Quote'));
  advance();

  page = new Page();
}

class Page {
  aboutLinkDe: DebugElement;
  dashboardLinkDe: DebugElement;
  heroesLinkDe: DebugElement;

  // for debugging
  comp: DeveloperGuidesTestingComponent;
  router: Router;
  fixture: ComponentFixture<DeveloperGuidesTestingComponent>;

  constructor() {
    const links = fixture.debugElement.queryAll(By.directive(RouterLink));
    this.aboutLinkDe = links[2];
    this.dashboardLinkDe = links[0];
    this.heroesLinkDe = links[1];

    // for debugging
    this.comp = comp;
    this.fixture = fixture;
    this.router = router;
  }
}

function expectPathToBe(path: string, expectationFailOutput?: any) {
  expect(location.path()).withContext(expectationFailOutput || 'location.path()').toEqual(path);
}

function expectElementOf(type: Type<any>): any {
  const el = fixture.debugElement.query(By.directive(type));
  expect(el).withContext(`expected an element for ${type.name}`).toBeTruthy();
  return el;
}
