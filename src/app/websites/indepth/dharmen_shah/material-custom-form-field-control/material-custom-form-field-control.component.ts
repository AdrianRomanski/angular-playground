import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Address, AddressShipping} from "./adress";
import {FormControl, FormGroup} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {
  AddressFormComponent
} from "../nested_resuable_forms/nested-form-group-child/address-form/address-form.component";

@Component({
  selector: 'app-material-custom-form-field-control',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatInputModule, AddressFormComponent],
  templateUrl: './material-custom-form-field-control.component.html',
  styleUrls: ['./material-custom-form-field-control.component.scss']
})
export class MaterialCustomFormFieldControlComponent {
  readonly freeShipping: AddressShipping = 'free';
  form: FormGroup = new FormGroup({
    email: new FormControl(),
    username: new FormControl(),
    address: new FormControl(
      new Address('', '', '', '', '', '', '', 0, this.freeShipping)
    ),
  });
}
