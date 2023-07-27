import { INTERVAL, PollingConfig, PollingService } from './polling.service';
import { PollingComponent } from './polling.component';
// @ts-ignore
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [PollingComponent],
  imports: [],
  exports: [PollingComponent],
})
export class PollingModule {
  static withConfig(config?: PollingConfig) {
    return {
      ngModule: PollingModule,
      providers: [
        PollingService,
        {
          provide: INTERVAL,
          useValue: config?.interval || 1000,
        },
      ],
    };
  }
}
