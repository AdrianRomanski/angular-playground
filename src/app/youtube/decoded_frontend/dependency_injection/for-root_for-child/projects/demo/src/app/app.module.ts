import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { PollingModule } from '../../../polling/src/lib/polling.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    PollingModule.withConfig(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
