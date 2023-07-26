import { Component, Injector, OnInit } from '@angular/core';
import { LoggerService } from '../../resolution-modifiers/logger.service';
import { ExperimentalLoggerService } from '../experimental-logger.service';
import { APP_CONFIG, AppConfig } from '../app.config';

import { Logger } from '../logger.interface';

export function loggerFactory(injector: Injector): Logger {
  return injector.get(APP_CONFIG).experimentalEnabled
    ? injector.get(ExperimentalLoggerService)
    : injector.get(LoggerService);
}

@Component({
  selector: 'app-dependency-providers',
  templateUrl: './dependency-providers.component.html',
  styleUrls: ['./dependency-providers.component.scss'],
  providers: [
    {
      provide: LoggerService,
      /**
       * useClass
       * Use provided class instead
       * alternative implementation for a common or default class
       */
      // useClass: ExperimentalLoggerService,
      /**
       * useExisting
       * Not creating new instance, use existing
       * Injecting singleton
       */
      // useExisting: ExperimentalLoggerService,
      /**
       * useValue have static nature
       */
      // useValue: LegacyLogger,
      /**
       * useFactory have dynamic nature
       */
      useFactory: loggerFactory,
      deps: [Injector],
    },
  ],
})
export class DependencyProvidersComponent implements OnInit {
  constructor(
    private logger: LoggerService, // private experimentalLogger: ExperimentalLoggerService,
  ) {}

  ngOnInit(): void {
    this.logger.log('logger');

    // this.experimentalLogger.log('experimentalLogger');
    // console.log('are they same?', this.logger === this.experimentalLogger);
  }
}
