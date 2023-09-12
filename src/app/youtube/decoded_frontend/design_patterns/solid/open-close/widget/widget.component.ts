import {AfterContentInit, Component, ContentChild, Input} from '@angular/core';
import {WidgetBase} from "../../barbara-liskov/widget-base";
import {RELOADABLE_CONTENT} from "../../dependency-inversion/widget-content.token";
import {Reloadable} from "../../interface-segregation-prinicple/widget-content";

@Component({
  selector: 'app-widget',
  template: `
    <div class="header">
      <h1>Weather</h1>
      <button mat-stroked-button (click)="onExportJson()">
        Export as JSON
      </button>
    </div>
    <mat-divider></mat-divider>
    <ng-content></ng-content>
  `,
  styles: [
    `
      :host {
        display: block;
        border: #f0ebeb solid 1px;
        border-radius: 5px;
        padding: 15px;
        background-color: #fafafa;
        width: 400px;
        margin-left: 20px;
      }
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    `,
  ],
})
export class WidgetComponent extends WidgetBase implements AfterContentInit{
  @ContentChild(RELOADABLE_CONTENT)
  content?: Reloadable;

  ngAfterContentInit(): void {
    if(this.content) {
      this.content.reload();
    }
  }
}
