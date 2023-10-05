import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StructuralDirectivesComponent } from './youtube/decoded_frontend/custom_structural_directives/structural-directives/structural-directives.component';
import { HideAfterDirective } from './youtube/decoded_frontend/custom_structural_directives/hide-after.directive';
import { IfLoadedDirective } from './youtube/decoded_frontend/custom_structural_directives/if-loaded.directive';
import { DependencyInjectionModule } from './youtube/decoded_frontend/dependency_injection/dependency-injection.module';
import { InjectContainerComponent } from './youtube/decoded_frontend/dependency_injection/inject/inject.container.component';
import { ProvidersInAngularRouteModule } from './youtube/decoded_frontend/dependency_injection/providers_in_angular_route/providers-in-angular-route.module';
import { PerformanceModule } from './youtube/decoded_frontend/performance/performance.module';
import { StrengthPipe } from './youtube/leelanarasimha/unit_testing/strength.pipe';
import { SingleResponsibilityComponent } from './youtube/decoded_frontend/design_patterns/solid/single-responsability/single-responsibility.component';
import {MatDividerModule} from "@angular/material/divider";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { WidgetComponent } from './youtube/decoded_frontend/design_patterns/solid/single-responsability/widget/widget.component';
import {DecodedFrontendModule} from "./youtube/decoded_frontend/decoded-frontend.module";
import {CdkComponent} from "./youtube/decoded_frontend/angular_material/cdk/cdk.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AddressFormComponent } from './websites/indepth/dharmen_shah/material-custom-form-field-control/address-form/address-form.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StructuralDirectivesComponent,
    HideAfterDirective,
    IfLoadedDirective,
    StrengthPipe,
    SingleResponsibilityComponent,
    WidgetComponent,
    AddressFormComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DependencyInjectionModule,
    InjectContainerComponent,
    ProvidersInAngularRouteModule,
    // AppInitializerModule,
    PerformanceModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    DecodedFrontendModule,
    CdkComponent,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    AddressFormComponent
  ]
})
export class AppModule {}
