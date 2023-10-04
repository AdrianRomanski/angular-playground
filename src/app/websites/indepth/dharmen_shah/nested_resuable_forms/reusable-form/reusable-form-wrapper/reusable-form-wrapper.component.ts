import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReusableFormComponent} from "../reusable-form.component";
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {Address} from "../address";

@Component({
  selector: 'app-reusable-form-wrapper',
  standalone: true,
  imports: [CommonModule, ReusableFormComponent],
  templateUrl: './reusable-form-wrapper.component.html',
  styleUrls: ['./reusable-form-wrapper.component.scss']
})
export class ReusableFormWrapperComponent {

  profileFormGroup = this._fb.group<ProfileForm>({
    name: this._fb.control("", {
      validators: [Validators.required],
      nonNullable: true,
    }),
    email: this._fb.control("", {
      validators: [Validators.email, Validators.required],
      nonNullable: true,
    }),
    address: this._fb.control(new Address()),
  });
  address = new Address();
  constructor(private _fb: FormBuilder) {}

  get nameFC() {
    return this.profileFormGroup.get("name");
  }
  get emailFC() {
    return this.profileFormGroup.get("email");
  }
}

type ProfileForm = {
  name: FormControl<string>;
  email: FormControl<string>;
  address: FormControl<Address | null>;
};
