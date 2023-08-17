import { Component, OnInit } from '@angular/core';
import { GalleryLoggerService } from '../gallery-logger.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  // only available for view, not for ng-content
  // viewProviders: [GalleryLoggerService],
})
export class GalleryComponent implements OnInit {
  constructor(private logger: GalleryLoggerService) {}

  ngOnInit(): void {
    this.logger.log('Gallery initialization');
  }
}
