import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySlideComponent } from './gallery-slide.component';

describe('GallerySlideComponent', () => {
  let component: GallerySlideComponent;
  let fixture: ComponentFixture<GallerySlideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GallerySlideComponent]
    });
    fixture = TestBed.createComponent(GallerySlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
