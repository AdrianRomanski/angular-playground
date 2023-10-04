import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-simple-form-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './simple-form-group.component.html',
  styleUrls: ['./simple-form-group.component.scss']
})
export class SimpleFormGroupComponent {
 profileFormGroup = new FormGroup<SimpleProfileForm>({
   city: undefined, country: undefined, state: undefined, zipCode: undefined,
   name: new FormControl("", {
      validators: [Validators.required],
      nonNullable: true,
    }),
    email: new FormControl("", {
      validators: [Validators.email, Validators.required],
      nonNullable: true,
    }),
    line1: new FormControl("", {
      validators: [Validators.required],
      nonNullable: true,
    })
   // other address form controls
  });

  // readonly COUNTRIES = COUNTRIES;
  constructor() {}

  get nameFC() {
    return this.profileFormGroup.get("name");
  }
  get emailFC() {
    return this.profileFormGroup.get("email");
  }
  get line1FC() {
    return this.profileFormGroup.get("line1");
  }
  // other form-control getters
}

export type SimpleProfileForm = {
  name: FormControl<string>;
  email: FormControl<string>;
  line1: FormControl<string>;
  line2?: FormControl<string | null>;
  zipCode: FormControl<string>;
  city: FormControl<string>;
  state: FormControl<string>;
  country: FormControl<string>;
};

