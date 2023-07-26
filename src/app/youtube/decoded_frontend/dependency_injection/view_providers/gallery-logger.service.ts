import { Injectable } from '@angular/core';
import { Logger } from '../dependency_providers/logger.interface';

@Injectable({
  providedIn: 'root',
})
export class GalleryLoggerService implements Logger {
  prefix: string = 'gallery';

  constructor() {
    console.log(`${this.prefix}: Logger init`);
  }

  log(message: string): void {
    console.log(`${this.prefix}: ${message}`);
  }
}
