import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WidgetSettingsService {
  constructor() {}

  getSettings() {
    return {
      pollingInterval: 50000,
    };
  }
}
