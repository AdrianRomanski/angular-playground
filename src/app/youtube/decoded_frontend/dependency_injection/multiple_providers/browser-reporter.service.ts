import { Injectable } from '@angular/core';
import { Reporter } from './reporter';

@Injectable({
  providedIn: 'root',
})
export class BrowserReporterService implements Reporter {
  constructor() {}

  report(): void {
    console.log(`Browser report:
    Browser Width - ${window.outerWidth}
    Browser Height - ${window.outerHeight}`);
  }
}
