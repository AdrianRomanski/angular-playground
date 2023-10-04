import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFormGroupChildComponent } from './nested-form-group-child.component';

describe('NestedFormGroupChildComponent', () => {
  let component: NestedFormGroupChildComponent;
  let fixture: ComponentFixture<NestedFormGroupChildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NestedFormGroupChildComponent]
    });
    fixture = TestBed.createComponent(NestedFormGroupChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
