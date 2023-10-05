import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialCustomFormFieldControlComponent } from './material-custom-form-field-control.component';

describe('MaterialCustomFormFieldControlComponent', () => {
  let component: MaterialCustomFormFieldControlComponent;
  let fixture: ComponentFixture<MaterialCustomFormFieldControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialCustomFormFieldControlComponent]
    });
    fixture = TestBed.createComponent(MaterialCustomFormFieldControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
