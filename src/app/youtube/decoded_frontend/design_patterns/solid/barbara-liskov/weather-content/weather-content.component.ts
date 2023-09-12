import {Component, ContentChild} from '@angular/core';
import {Reloadable, WidgetContent} from "../../interface-segregation-prinicple/widget-content";
import {RELOADABLE_CONTENT} from "../../dependency-inversion/widget-content.token";

@Component({
  selector: 'app-weather-content',
  templateUrl: './weather-content.component.html',
  styleUrls: ['./weather-content.component.scss']
})
export class WeatherContentComponent implements WidgetContent, Reloadable{
  id: string = '';
  loading: boolean = false;

  reload(): void {
    console.log('do polling..')
  }
}
