import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppInitializerComponent } from './app-initializer.component';
import { InitializerModule } from './initializer/initializer.module';

@NgModule({
  declarations: [AppInitializerComponent],
  imports: [BrowserModule, InitializerModule],
  bootstrap: [AppInitializerComponent],
  exports: [AppInitializerComponent],
})
export class AppInitializerModule {}
