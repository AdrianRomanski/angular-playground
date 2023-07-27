import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';
import { PollingModule } from '../../../../polling/src/lib/polling.module';

@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    LazyRoutingModule,
    PollingModule.withConfig({
      interval: 3000,
    }),
  ],
})
export class LazyModule {}
