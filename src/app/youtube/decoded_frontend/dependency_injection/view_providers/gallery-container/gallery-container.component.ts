import { Component } from '@angular/core';
import { GalleryLoggerService } from '../gallery-logger.service';

@Component({
  selector: 'app-gallery-container',
  templateUrl: './gallery-container.component.html',
  styleUrls: ['./gallery-container.component.scss'],
  providers: [
    {
      provide: GalleryLoggerService,
    },
  ],
})
export class GalleryContainerComponent {}
