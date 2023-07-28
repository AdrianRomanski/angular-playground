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

@NgModule({
  declarations: [
    AppComponent,
    StructuralDirectivesComponent,
    HideAfterDirective,
    IfLoadedDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DeveloperGuidesTestingModule,
    DependencyInjectionModule,
    InjectContainerComponent,
    ProvidersInAngularRouteModule,
    AppInitializerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
