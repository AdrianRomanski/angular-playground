import { Injectable } from '@angular/core';
import { Logger } from '../dependency_providers/logger.interface';

@Injectable({
  providedIn: 'root',
})
export class LoggerService implements Logger {
  prefix = 'root';

  constructor() {}

  log(message: string) {
    console.log(`${this.prefix} - ${message}`);
  }
}
