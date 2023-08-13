import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesContainerComponent } from './pure_pipes/pipes-container/pipes-container.component';
import { TheoryPipe } from './pure_pipes/theory.pipe';

@NgModule({
  declarations: [PipesContainerComponent, TheoryPipe],
  imports: [CommonModule],
  exports: [PipesContainerComponent],
})
export class PerformanceModule {}
