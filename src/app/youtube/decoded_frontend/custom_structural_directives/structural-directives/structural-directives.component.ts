import { Component } from '@angular/core';
import { LoadingState, Person } from '../if-loaded.directive';

@Component({
  selector: 'decoded-fronted-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss'],
})
export class StructuralDirectivesComponent {
  state: LoadingState<Person> = {
    type: 'loading',
  };
  constructor() {
    setTimeout(() => {
      this.state = {
        type: 'loaded',
        data: {
          name: 'Daria',
        },
      };
    }, 3000);
  }
}
