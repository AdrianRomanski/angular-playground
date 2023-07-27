// @ts-ignore
import { Inject, Injectable, InjectionToken } from '@angular/core';
// @ts-ignore
import { shareReplay, timer } from 'rxjs';

export interface PollingConfig {
  interval: number;
}

export const INTERVAL = new InjectionToken<number>('interval');
@Injectable()
export class PollingService {
  public polling$ = timer(0, this.interval || 1000).pipe(shareReplay());
  // @ts-ignore
  constructor(@Optional() @Inject(INTERVAL) private interval: number) {}
}
