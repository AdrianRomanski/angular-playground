import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueAccessorExampleComponent } from './value-accessor-example.component';

describe('ValueAccessorExampleComponent', () => {
  let component: ValueAccessorExampleComponent;
  let fixture: ComponentFixture<ValueAccessorExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ValueAccessorExampleComponent]
    });
    fixture = TestBed.createComponent(ValueAccessorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
