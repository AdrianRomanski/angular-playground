import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedFormGroupComponent } from './nested-form-group.component';

describe('NestedFormGroupComponent', () => {
  let component: NestedFormGroupComponent;
  let fixture: ComponentFixture<NestedFormGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NestedFormGroupComponent]
    });
    fixture = TestBed.createComponent(NestedFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
