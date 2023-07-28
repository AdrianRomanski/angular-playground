import { Directive, inject, Input } from '@angular/core';
import { WidgetDataService } from './services/widget-data.service';
import { WidgetSettingsService } from './services/widget-settings.service';

@Directive()
export abstract class WidgetBase {
  @Input()
  id = '';

  @Input()
  title = '';

  protected dataProvider = inject(WidgetDataService);
  protected settings = inject(WidgetSettingsService);
}
