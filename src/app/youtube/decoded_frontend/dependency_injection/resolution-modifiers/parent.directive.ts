import { Directive, Optional, Self } from '@angular/core';
import { LoggerService } from './logger.service';

@Directive({
  selector: '[appParent]',
  providers: [LoggerService],
})
export class ParentDirective {
  constructor(@Optional() @Self() private logger: LoggerService) {
    if (logger) {
      logger.prefix = 'parentDirective::';
      logger.log('directive constructor');
    }
  }
}
