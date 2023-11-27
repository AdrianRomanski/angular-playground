import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockInputComponent } from './lock-input.component';

describe('LockInputComponent', () => {
  let component: LockInputComponent;
  let fixture: ComponentFixture<LockInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LockInputComponent]
    });
    fixture = TestBed.createComponent(LockInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
