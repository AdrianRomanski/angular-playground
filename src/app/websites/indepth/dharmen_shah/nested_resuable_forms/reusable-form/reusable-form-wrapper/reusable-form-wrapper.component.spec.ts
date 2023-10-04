import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableFormWrapperComponent } from './reusable-form-wrapper.component';

describe('ReusableFormWrapperComponent', () => {
  let component: ReusableFormWrapperComponent;
  let fixture: ComponentFixture<ReusableFormWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReusableFormWrapperComponent]
    });
    fixture = TestBed.createComponent(ReusableFormWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
