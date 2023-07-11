import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { DeveloperGuidesTestingComponent } from './developer-guides-testing.component';
import { DeveloperGuidesTestingRoutingModule } from './developer-guides-testing-routing.module';

import { AboutComponent } from './about/about.component';
import { BannerComponent } from './banner/banner.component';
import { HeroService } from './model/hero.service';
import { UserService } from './model/user.service';
import { TwainComponent } from './twain/twain.component';
import { TwainService } from './twain/twain.service';
import { WelcomeComponent } from './welcome/welcome.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    DashboardModule,
    DeveloperGuidesTestingRoutingModule,
    SharedModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [
    HeroService,
    TwainService,
    UserService
  ],
  declarations: [
    DeveloperGuidesTestingComponent,
    AboutComponent,
    BannerComponent,
    TwainComponent,
    WelcomeComponent,
  ],
  exports: [
    DeveloperGuidesTestingComponent
  ],
  bootstrap: [DeveloperGuidesTestingComponent]
})
export class DeveloperGuidesTestingModule { }
