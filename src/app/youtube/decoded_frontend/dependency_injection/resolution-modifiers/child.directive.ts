import { Directive, Host } from '@angular/core';
import { LoggerService } from './logger.service';

@Directive({
  selector: '[appChild]',
})
export class ChildDirective {
  /**
   * @Host() Looking for provider only in scope of view
   */
  constructor(@Host() private logger: LoggerService) {
    logger.prefix = 'childDirective::';
    logger.log('directive constructor');
  }
}
