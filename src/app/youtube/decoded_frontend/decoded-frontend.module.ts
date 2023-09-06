import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OpenCloseComponent} from "./design_patterns/solid/open-close/open-close.component";
import {VelocityContentComponent} from "./design_patterns/solid/open-close/widget/velocity-content.component";
import {WetherContentComponent} from "./design_patterns/solid/open-close/widget/wether-content.component";
import {WidgetComponent} from "./design_patterns/solid/open-close/widget/widget.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import { BarbaraLiskovComponent } from './design_patterns/solid/barbara-liskov/barbara-liskov.component';
import { WeatherContentComponent } from './design_patterns/solid/barbara-liskov/weather-content/weather-content.component';



@NgModule({
  declarations: [
    OpenCloseComponent,
    VelocityContentComponent,
    WetherContentComponent,
    WidgetComponent,
    BarbaraLiskovComponent,
    WeatherContentComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule
  ],
  exports: [
    OpenCloseComponent,
    VelocityContentComponent,
    WetherContentComponent
  ]
})
export class DecodedFrontendModule { }
