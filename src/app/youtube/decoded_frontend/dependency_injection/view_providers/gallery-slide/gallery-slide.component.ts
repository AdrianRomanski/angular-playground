import { Component, OnInit } from '@angular/core';
import { GalleryLoggerService } from '../gallery-logger.service';

@Component({
  selector: 'app-gallery-slide',
  templateUrl: './gallery-slide.component.html',
  styleUrls: ['./gallery-slide.component.scss'],
})
export class GallerySlideComponent implements OnInit {
  constructor(private logger: GalleryLoggerService) {}

  ngOnInit(): void {
    this.logger.log('Slide initialization');
  }
}
