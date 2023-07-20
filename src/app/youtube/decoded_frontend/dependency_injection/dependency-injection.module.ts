import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ChildComponent,
  GrandChildComponent,
  RootComponent,
} from './understanding_hierarchical_injectors/user.service';

@NgModule({
  declarations: [RootComponent, ChildComponent, GrandChildComponent],
  imports: [CommonModule],
})
export class DependencyInjectionModule {}
