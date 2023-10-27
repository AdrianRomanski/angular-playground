import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CdkPortalRoutingModule } from './cdk-portal-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ActionAreaComponent } from './action-area/action-area.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import {CdkPortalComponent} from "./cdk-portal.component";
import {PortalModule} from "@angular/cdk/portal";
import {MatInputModule} from "@angular/material/input";
import {ActionsButtonsComponent} from "./actions-buttons/actions-buttons.component";

@NgModule({
    declarations: [
        CdkPortalComponent,
        HeaderComponent,
        SidebarComponent,
        ActionAreaComponent,
        UsersPageComponent,
        OrdersPageComponent,
        ActionsButtonsComponent
    ],
  imports: [
    BrowserModule,
    CdkPortalRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    PortalModule,
    MatInputModule
  ],
    providers: [],
    exports: [
        CdkPortalComponent
    ],
})
export class CdkPortalModule { }

