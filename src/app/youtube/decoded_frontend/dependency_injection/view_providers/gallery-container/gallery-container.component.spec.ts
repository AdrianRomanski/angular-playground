import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryContainerComponent } from './gallery-container.component';

describe('GalleryContainerComponent', () => {
  let component: GalleryContainerComponent;
  let fixture: ComponentFixture<GalleryContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryContainerComponent]
    });
    fixture = TestBed.createComponent(GalleryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
