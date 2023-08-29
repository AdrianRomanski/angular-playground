import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleResponsibilityComponent } from './single-responsibility.component';

describe('SingleResponsabilityComponent', () => {
  let component: SingleResponsibilityComponent;
  let fixture: ComponentFixture<SingleResponsibilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleResponsibilityComponent]
    });
    fixture = TestBed.createComponent(SingleResponsibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
