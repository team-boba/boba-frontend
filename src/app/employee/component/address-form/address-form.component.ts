import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormValidationService } from './../../../shared/form-validation/form-validation.service';
import { FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { OnboardingRequest } from './../../domain/OnboardingRequest.model';
import { OnboardingStoreService } from './../../shared/onboarding/onboarding-store.service';
import { ProfileStoreService } from '../../shared/profile/profile-store.service';
import { ProfileBackendService } from '../../shared/profile/profile-backend.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {
  returnUserId: number = null;
  
  addressForm = this.fb.group({
    addressLineOne: [''],
    addressLineTwo: [''],
    city: [''],
    zipcode: [''],
    stateName: [''],
    stateAbbr: ['']
  });
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private formValidationService: FormValidationService,
    private onboardingStoreService: OnboardingStoreService,
    private location: Location,
    private profileStoreService: ProfileStoreService,
    private profileBackendService: ProfileBackendService
  ) { }

  ngOnInit(): void {
    let person = this.profileStoreService.person$.getValue();
    if (person != null) { 
      this.returnUserId = person.userId;
      this.addressForm.patchValue({
        addressLineOne: person.address.addressLineOne,
        addressLineTwo: person.address.addressLineTwo,
        city: person.address.city,
        zipcode: person.address.zipcode,
        stateName: person.address.stateName,
        stateAbbr: person.address.stateAbbr
      });
    }
  }

  get addressFormControls() {
    return this.addressForm.controls;
  }

  back() {
    this.location.back();
  }

  async onSubmit() {
    console.log(this.addressForm.value);

    let addressFormValue = this.addressForm.value;
    if (this.returnUserId) {
      let person = this.profileStoreService.person$.getValue();
      person.address.addressLineOne = addressFormValue.addressLineOne;
      person.address.addressLineTwo = addressFormValue.addressLineTwo;
      person.address.city = addressFormValue.city;
      person.address.zipcode = addressFormValue.zipcode;
      person.address.stateName = addressFormValue.stateName;
      person.address.stateAbbr = addressFormValue.stateAbbr;

      await this.profileBackendService.updateAddressRequest(this.returnUserId, addressFormValue);
      this.location.back();
    } else {
      this.onboardingStoreService.setAddressOfCurrentOnboardingRequest(addressFormValue);
      this.router.navigate(['/employee/employee-form']);
    }
  }
}