import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormValidationService } from './../../../shared/form-validation/form-validation.service';
import { FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { OnboardingRequest } from './../../domain/OnboardingRequest.model';
import { OnboardingStoreService } from './../../shared/onboarding/onboarding-store.service';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private formValidationService: FormValidationService,
    private onboardingStoreService: OnboardingStoreService
  ) { }

  ngOnInit(): void {
  }

  addressForm = this.fb.group({
    addressLineOne: [''],
    addressLineTwo: [''],
    city: [''],
    zipcode: [''],
    stateName: [''],
    stateAbbr: ['']
  });

  get addressFormControls() {
    return this.addressForm.controls;
  }

  onSubmit() {
    console.log(this.addressForm.value);

    this.onboardingStoreService.setAddressOfCurrentOnboardingRequest(this.addressForm.value);

    this.router.navigate(['/employee/employee-form']);
  }
}