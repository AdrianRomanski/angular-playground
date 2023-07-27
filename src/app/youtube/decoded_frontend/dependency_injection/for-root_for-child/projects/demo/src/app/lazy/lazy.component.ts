import { Component, OnInit } from '@angular/core';
import { PollingService } from '../../../../polling/src/lib/polling.service';

@Component({
  selector: 'app-lazy',
  template: `
    <p>Polling count times (lazy): {{ polling.polling$ | async }}</p>
  `,
})
export class LazyComponent implements OnInit {
  constructor(public polling: PollingService) {}

  ngOnInit(): void {}
}
