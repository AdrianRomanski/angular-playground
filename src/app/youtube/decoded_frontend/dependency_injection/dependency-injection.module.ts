import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ChildComponent,
  GrandChildComponent,
  RootComponent,
} from './understanding_hierarchical_injectors/user.service';
import { ParentDirective } from './resolution-modifiers/parent.directive';
import { ChildDirective } from './resolution-modifiers/child.directive';
import { ResolutionModifiersContainerComponent } from './resolution-modifiers/resolution-modifiers-container/resolution-modifiers-container.component';
import { LoggerService } from './resolution-modifiers/logger.service';

@NgModule({
  declarations: [
    RootComponent,
    ChildComponent,
    GrandChildComponent,
    ParentDirective,
    ChildDirective,
    ResolutionModifiersContainerComponent,
  ],
  imports: [CommonModule],
  exports: [ResolutionModifiersContainerComponent],
  providers: [LoggerService],
})
export class DependencyInjectionModule {}
