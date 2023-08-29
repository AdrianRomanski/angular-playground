import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeveloperGuidesTestingModule } from './websites/angular/developer_guides/testing/app/developer-guides-testing.module';
import { StructuralDirectivesComponent } from './youtube/decoded_frontend/custom_structural_directives/structural-directives/structural-directives.component';
import { HideAfterDirective } from './youtube/decoded_frontend/custom_structural_directives/hide-after.directive';
import { IfLoadedDirective } from './youtube/decoded_frontend/custom_structural_directives/if-loaded.directive';
import { DependencyInjectionModule } from './youtube/decoded_frontend/dependency_injection/dependency-injection.module';
import { InjectContainerComponent } from './youtube/decoded_frontend/dependency_injection/inject/inject.container.component';
import { ProvidersInAngularRouteModule } from './youtube/decoded_frontend/dependency_injection/providers_in_angular_route/providers-in-angular-route.module';
import { AppInitializerModule } from './youtube/decoded_frontend/dependency_injection/app_initializer_token/app/app-initializer.module';
import { PerformanceModule } from './youtube/decoded_frontend/performance/performance.module';
import { StrengthPipe } from './youtube/leelanarasimha/unit_testing/strength.pipe';
import { SingleResponsibilityComponent } from './youtube/decoded_frontend/design_patterns/solid/single-responsability/single-responsibility.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { WidgetComponent } from './youtube/decoded_frontend/design_patterns/solid/single-responsability/widget/widget.component';

@NgModule({
  declarations: [
    AppComponent,
    StructuralDirectivesComponent,
    HideAfterDirective,
    IfLoadedDirective,
    StrengthPipe,
    SingleResponsibilityComponent,
    WidgetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeveloperGuidesTestingModule,
    DependencyInjectionModule,
    InjectContainerComponent,
    ProvidersInAngularRouteModule,
    // AppInitializerModule,
    PerformanceModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
