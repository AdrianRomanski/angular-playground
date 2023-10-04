import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AddressForm, ProfileForm} from "../types";
import {AddressFormComponent} from "./address-form/address-form.component";

@Component({
  selector: 'app-nested-form-group-child',
  standalone: true,
  imports: [CommonModule, AddressFormComponent],
  templateUrl: './nested-form-group-child.component.html',
  styleUrls: ['./nested-form-group-child.component.scss']
})
export class NestedFormGroupChildComponent {
  profileFormGroup = new FormGroup<ProfileForm>({
    name: new FormControl("", {
      validators: [Validators.required],
      nonNullable: true,
    }),
    email: new FormControl("", {
      validators: [Validators.email, Validators.required],
      nonNullable: true,
    }),
    address: new FormGroup<AddressForm>({
      line1: new FormControl("", {
        validators: [Validators.required],
        nonNullable: true,
      }),
      line2: new FormControl(""),
      city: new FormControl("", {
        validators: [Validators.required],
        nonNullable: true,
      }),
      state: new FormControl("", {
        validators: [Validators.required],
        nonNullable: true,
      }),
      zipCode: new FormControl("", {
        validators: [Validators.required],
        nonNullable: true,
      }),
      country: new FormControl("", {
        validators: [Validators.required],
        nonNullable: true,
      }),
    }),
  });

  constructor() {}

  get addressFormGroup() {
    return this.profileFormGroup.get("address") as FormGroup;
  }

  get nameFC() {
    return this.profileFormGroup.get("name");
  }
  get emailFC() {
    return this.addressFormGroup.get("email");
  }
}
