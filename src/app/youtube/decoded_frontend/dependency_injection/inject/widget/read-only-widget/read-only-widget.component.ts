import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { READONLY_WIDGET_DEPS } from '../imports';
import { WidgetBase } from '../widget-base';

@Component({
  selector: 'app-read-only-widget',
  templateUrl: './read-only-widget.component.html',
  styleUrls: [
    '../widget-base.scss',
    './read-only-widget.component.scss'
  ],
  standalone: true,
  imports: [...READONLY_WIDGET_DEPS]
})
export class ReadOnlyWidgetComponent extends WidgetBase implements OnInit {

  data$!: Observable<any>;
  config: any;

  ngOnInit(): void {
    this.data$ = this.dataProvider.loadData().pipe(map(data => data.title));
    this.config = this.settings.getSettings();
  }
  
  onRefresh() {}

}
