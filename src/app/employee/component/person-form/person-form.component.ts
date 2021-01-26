import { FormValidationService } from './../../../shared/form-validation/form-validation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { OnboardingRequest } from './../../domain/OnboardingRequest.model';
import { OnboardingStoreService } from './../../shared/onboarding/onboarding-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
  genders = ['Male', 'Female', 'I do not wish to answer'];

  email = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]);

  personForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    middleName: [''],
    email: ['', [Validators.required]],
    cellPhone: ['', [Validators.required]],
    alternatePhone: [''],
    gender: [''],
    ssn: ['', [Validators.required]],
    dob: ['', [Validators.required]],
  });


  constructor(
    private fb: FormBuilder,
    private formValidationService: FormValidationService,
    private onboardingStoreService: OnboardingStoreService,
    private router: Router) { }

  ngOnInit(): void {
  }


  get personFormControls() {
    return this.personForm.controls;
  }

  get genderControls() {
    return (this.personForm.get('gender') as FormGroup).controls;
  }

  onSubmit() {
    console.log(this.personForm.value);

    this.onboardingStoreService.newCurrentOnboardingRequest();
    this.onboardingStoreService.setPersonOfCurrentOnboardingRequest(this.personForm.value);

    this.router.navigate(['/employee/address-form']);
  }

}