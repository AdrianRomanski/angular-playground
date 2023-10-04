import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormGroup} from "@angular/forms";
import {COUNTRIES} from "../../countries";
import {AddressForm} from "../../types";

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent {
  @Input("formGroup") addressFormGroup!: FormGroup<AddressForm>;
  readonly COUNTRIES = COUNTRIES;
  constructor() {}

  get line1FC() {
    return this.addressFormGroup.get("line1");
  }
  get cityFC() {
    return this.addressFormGroup.get("city");
  }
  get stateFC() {
    return this.addressFormGroup.get("state");
  }
  get zipCodeFC() {
    return this.addressFormGroup.get("zipCode");
  }
  get countryFC() {
    return this.addressFormGroup.get("country");
  }
}
