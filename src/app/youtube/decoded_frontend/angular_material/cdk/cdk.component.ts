import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {DropDownSearchComponent} from "./overlay/drop-down-search/drop-down-search.component";

@Component({
  selector: 'app-cdk',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, DropDownSearchComponent],
  templateUrl: './cdk.component.html',
  styleUrls: ['./cdk.component.scss']
})
export class CdkComponent {

}
