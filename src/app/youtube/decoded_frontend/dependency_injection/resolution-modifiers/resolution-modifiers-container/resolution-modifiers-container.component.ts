import { Component, Optional, Self, SkipSelf } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-resolution-modifiers',
  templateUrl: './resolution-modifiers-container.component.html',
  providers: [LoggerService],
})
export class ResolutionModifiersContainerComponent {
  /**
   * Self() - Looks only for provider in this component
   * Optional() - Optional dependency injection - without error if reach nullInjector
   * SkipSelf() - Skipping Provider in this component
   */
  constructor(
    @Self() @Optional() private logger: LoggerService,
    @SkipSelf() private parentLogger: LoggerService,
  ) {
    if (logger) {
      this.logger.prefix = 'resolution-modifiers.component';
      this.logger.log('constructor init');
    }
    this.parentLogger.log('constructor init');
  }
}
