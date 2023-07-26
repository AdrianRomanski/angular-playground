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
import { DependencyProvidersComponent } from './dependency_providers/dependecy-providers-container/dependency-providers.component';
import { REPORTERS } from './multiple_providers/reporter.token';
import { BrowserReporterService } from './multiple_providers/browser-reporter.service';
import { EngagingReporterService } from './multiple_providers/engaging-reporter.service';

@NgModule({
  declarations: [
    RootComponent,
    ChildComponent,
    GrandChildComponent,
    ParentDirective,
    ChildDirective,
    ResolutionModifiersContainerComponent,
    DependencyProvidersComponent,
  ],
  imports: [CommonModule],
  exports: [
    ResolutionModifiersContainerComponent,
    DependencyProvidersComponent,
  ],
  providers: [
    { provide: REPORTERS, useExisting: BrowserReporterService, multi: true },
    { provide: REPORTERS, useExisting: EngagingReporterService, multi: true },
  ],
})
export class DependencyInjectionModule {}
