import { Component, OnInit } from '@angular/core';
import { PollingService } from '../../../../../polling/src/lib/polling.service';

@Component({
  selector: 'app-home',
  template: `<p>Polling count times: {{ polling.polling$ | async }}</p>`,
})
export class HomeComponent implements OnInit {
  constructor(public polling: PollingService) {}

  ngOnInit(): void {}
}
