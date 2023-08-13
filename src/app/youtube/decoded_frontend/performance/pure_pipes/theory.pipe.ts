import { Pipe, PipeTransform } from '@angular/core';
import {TheoryService} from "./theory.service";

@Pipe({
  name: 'theory',
  // it will no trigger on every life cycle
  pure: true // default value
})
// by default pipes are pure
export class TheoryPipe implements PipeTransform {

  constructor(private theory: TheoryService) {
  }

  transform(userId: number, property: 'title' | 'userId'): any {
    let theory = this.theory.getTheory(userId);
    if(theory) {
      return theory[property];
    }
  }
}
