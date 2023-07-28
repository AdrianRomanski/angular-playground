import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { INTERACTIVE_WIDGET_DEPS } from '../imports';
import { WidgetActionsService } from '../services/widget-actions.service';
import { WidgetBase } from '../widget-base';
import { Store } from '../../store.service';

function injectState(key: string) {
  const store = inject(Store);
  return store.select(key);
}

@Component({
  selector: 'app-interactive-widget',
  templateUrl: './interactive-widget.component.html',
  styleUrls: ['../widget-base.scss', './interactive-widget.component.scss'],
  standalone: true,
  imports: [...INTERACTIVE_WIDGET_DEPS],
})
export class InteractiveWidgetComponent extends WidgetBase implements OnInit {
  data$!: Observable<any>;
  config: any;

  state = injectState('users');

  constructor(private actions: WidgetActionsService) {
    super();
  }

  ngOnInit(): void {
    this.data$ = this.dataProvider.loadData();
    this.config = this.settings.getSettings();
  }

  refresh() {
    this.actions.refresh();
  }

  addNewItem() {}
}
