import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../resolution-modifiers/logger.service';
import { ExperimentalLoggerService } from '../experimental-logger.service';
import { LegacyLogger } from '../logger.legacy';
import { APP_CONFIG, AppConfig } from '../app.config';
import { HttpClient } from '@angular/common/http';

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
      useFactory: (config: AppConfig, http: HttpClient) => {
        return config.experimentalEnabled
          ? new ExperimentalLoggerService(http)
          : new LoggerService();
      },
      deps: [APP_CONFIG, HttpClient],
    },
  ],
})
export class DependencyProvidersComponent implements OnInit {
  constructor(
    private logger: LoggerService,
  ) // private experimentalLogger: ExperimentalLoggerService,
  {}

  ngOnInit(): void {
    this.logger.log('logger');
    // this.experimentalLogger.log('experimentalLogger');
    // console.log('are they same?', this.logger === this.experimentalLogger);
  }
}
