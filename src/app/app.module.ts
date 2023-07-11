import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
    DeveloperGuidesTestingModule
} from "./websites/angular/developer_guides/testing/app/developer-guides-testing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DeveloperGuidesTestingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
