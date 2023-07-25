import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependencyProvidersComponent } from './dependency-providers.component';

describe('DependecyProvidersComponent', () => {
  let component: DependencyProvidersComponent;
  let fixture: ComponentFixture<DependencyProvidersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DependencyProvidersComponent],
    });
    fixture = TestBed.createComponent(DependencyProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
