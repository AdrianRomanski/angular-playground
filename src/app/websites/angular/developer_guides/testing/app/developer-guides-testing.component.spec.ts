import {Component, DebugElement, NO_ERRORS_SCHEMA} from '@angular/core';
import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {provideRouter, Router, RouterLink} from '@angular/router';

import {DeveloperGuidesTestingComponent} from './developer-guides-testing.component';

@Component({selector: 'app-banner', template: ''})
class BannerStubComponent {
}

@Component({selector: 'router-outlet', template: ''})
class RouterOutletStubComponent {
}

@Component({selector: 'app-welcome', template: ''})
class WelcomeStubComponent {
}

let comp: DeveloperGuidesTestingComponent;
let fixture: ComponentFixture<DeveloperGuidesTestingComponent>;

describe('DeveloperGuidesTestingComponent & TestModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed
        .configureTestingModule({
          imports: [RouterLink],
          providers: [provideRouter([])],
          declarations:
              [DeveloperGuidesTestingComponent, BannerStubComponent, RouterOutletStubComponent, WelcomeStubComponent]
        })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(DeveloperGuidesTestingComponent);
          comp = fixture.componentInstance;
        });
  }));
  tests();
});

//////// Testing w/ NO_ERRORS_SCHEMA //////
describe('DeveloperGuidesTestingComponent & NO_ERRORS_SCHEMA', () => {
  beforeEach(waitForAsync(() => {
    TestBed
        .configureTestingModule({
          declarations: [
            DeveloperGuidesTestingComponent,
            BannerStubComponent,
          ],
          providers: [provideRouter([])],
          imports: [RouterLink],
          schemas: [NO_ERRORS_SCHEMA]
        })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(DeveloperGuidesTestingComponent);
          comp = fixture.componentInstance;
        });
  }));
  tests();
});

//////// Testing w/ real root module //////
import {DeveloperGuidesTestingModule} from './developer-guides-testing.module';
import {DeveloperGuidesTestingRoutingModule} from './developer-guides-testing-routing.module';

describe('DeveloperGuidesTestingComponent & DeveloperGuidesTestingModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed
        .configureTestingModule({
          imports: [DeveloperGuidesTestingModule],
        })

        // Get rid of app's Router configuration otherwise many failures.
        // Doing so removes Router declarations; add the Router stubs
        .overrideModule(DeveloperGuidesTestingModule, {
          remove: {imports: [DeveloperGuidesTestingRoutingModule]},
          add: {
            declarations: [RouterOutletStubComponent],
            imports: [RouterLink],
            providers: [provideRouter([])],
          }
        })

        .compileComponents()

        .then(() => {
          fixture = TestBed.createComponent(DeveloperGuidesTestingComponent);
          comp = fixture.componentInstance;
        });
  }));

  tests();
});

function tests() {
  let routerLinks: RouterLink[];
  let linkDes: DebugElement[];

  beforeEach(() => {
    fixture.detectChanges();  // trigger initial data binding

    // find DebugElements with an attached RouterLinkStubDirective
    linkDes = fixture.debugElement.queryAll(By.directive(RouterLink));

    // get attached link directive instances
    // using each DebugElement's injector
    routerLinks = linkDes.map(de => de.injector.get(RouterLink));
  });

  it('can instantiate the component', () => {
    expect(comp).not.toBeNull();
  });

  it('can get RouterLinks from template', () => {
    expect(routerLinks.length).withContext('should have 3 routerLinks').toBe(3);
    expect(routerLinks[0].href).toBe('/dashboard');
    expect(routerLinks[1].href).toBe('/heroes');
    expect(routerLinks[2].href).toBe('/about');
  });

  it('can click Heroes link in template', fakeAsync(() => {
       const heroesLinkDe = linkDes[1];  // heroes link DebugElement

       TestBed.inject(Router).resetConfig([{path: '**', children: []}]);
       heroesLinkDe.triggerEventHandler('click', {button: 0});
       tick();
       fixture.detectChanges();

       expect(TestBed.inject(Router).url).toBe('/heroes');
     }));
}
