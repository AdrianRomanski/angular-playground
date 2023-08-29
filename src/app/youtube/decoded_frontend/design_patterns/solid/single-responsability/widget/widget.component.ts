import { Component } from '@angular/core';
import {JsonExporterService} from "../json-exporter.service";

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent {

  constructor(private jsonExporter: JsonExporterService) {
  }
 onExportJson() {
    this.jsonExporter.export();
  }
}
