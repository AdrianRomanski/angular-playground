import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PollingModule } from '../../../../polling/src/lib/polling.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, PollingModule],
})
export class HomeModule {}
