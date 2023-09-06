import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarbaraLiskovComponent } from './barbara-liskov.component';

describe('BarbaraLiskovComponent', () => {
  let component: BarbaraLiskovComponent;
  let fixture: ComponentFixture<BarbaraLiskovComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarbaraLiskovComponent]
    });
    fixture = TestBed.createComponent(BarbaraLiskovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
