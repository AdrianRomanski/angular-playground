import { Inject, Injectable } from '@angular/core';
import { Logger } from './logger.interface';
import { REPORTERS } from '../multiple_providers/reporter.token';
import { Reporter } from '../multiple_providers/reporter';

@Injectable({
  providedIn: 'root',
})
export class ExperimentalLoggerService implements Logger {
  // constructor(@Inject(APP_CONFIG) private config: AppConfig) {
  //   console.log('ExperimentalLoggerService -> constructor -> config', config);
  // }

  constructor(@Inject(REPORTERS) private reporters: ReadonlyArray<Reporter>) {}

  log(message: string): void {
    this.reporters.forEach((r) => r.report());
    console.log(`logging from ${this.prefix}`);
  }

  prefix: string = 'experimental';
}
