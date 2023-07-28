import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { ProvidersInAngularRouteContainer } from './providers-in-angular-route-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HomeModule } from './feature/home/home.module';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ProvidersInAngularRouteRoutingModule } from './providers-in-angular-route-routing.module';

@NgModule({
  declarations: [ProvidersInAngularRouteContainer],
  imports: [
    BrowserModule,
    ProvidersInAngularRouteRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    HomeModule,
    RouterLinkActive,
    RouterLink,
  ],
  providers: [],
  bootstrap: [ProvidersInAngularRouteContainer],
  exports: [ProvidersInAngularRouteContainer],
})
export class ProvidersInAngularRouteModule {}
