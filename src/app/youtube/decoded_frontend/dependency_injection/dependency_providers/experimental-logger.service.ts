import { Inject, Injectable } from '@angular/core';
import { Logger } from './logger.interface';
import { APP_CONFIG, AppConfig } from './app.config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExperimentalLoggerService implements Logger {
  // constructor(@Inject(APP_CONFIG) private config: AppConfig) {
  //   console.log('ExperimentalLoggerService -> constructor -> config', config);
  // }

  constructor(private http: HttpClient) {}

  log(message: string): void {
    console.log(`logging from ${this.prefix}`);
  }

  prefix: string = 'experimental';
}
