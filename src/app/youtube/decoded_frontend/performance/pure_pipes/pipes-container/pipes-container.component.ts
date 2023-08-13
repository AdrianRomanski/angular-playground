import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { TheoryService } from '../theory.service';

@Component({
  selector: 'app-pipes-container',
  templateUrl: './pipes-container.component.html',
  styleUrls: ['./pipes-container.component.scss'],
})
export class PipesContainerComponent implements OnInit {
  @HostListener('click')
  clicked() {
    console.log('clicked');
  }

  public users: any;
  constructor(
    public user: UserService,
    public theory: TheoryService,
  ) {}

  getTheory(userId: number): any {
    console.log('getTheory');
    return this.theory.getTheory(userId);
  }

  ngOnInit(): void {
    console.log('onInit');
  }
}
