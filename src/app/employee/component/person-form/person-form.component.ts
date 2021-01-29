import { ProfileBackendService } from './../../shared/profile/profile-backend.service';
import { OnboardingBackendService } from './../../shared/onboarding/onboarding-backend.service';
import { Location } from '@angular/common';
import { ProfileStoreService } from './../../shared/profile/profile-store.service';
import { FormValidationService } from './../../../shared/form-validation/form-validation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { OnboardingStoreService } from './../../shared/onboarding/onboarding-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
  genders = ['Male', 'Female', 'I do not wish to answer'];
  returnUserId: number = null;

  personForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    middleName: [''],
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
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
    private router: Router,
    private profileStoreService: ProfileStoreService,
    private profileBackendService: ProfileBackendService,
    private location: Location
    ) { }

  ngOnInit(): void {
    let person = this.profileStoreService.person$.getValue();
    if (person != null) { 
      this.returnUserId = person.userId;
      this.personForm.patchValue({
        firstName: person.firstName,
        lastName: person.lastName,
        middleName: person.middleName,
        email: person.email,
        cellPhone: person.cellphone,
        alternatePhone: person.alternatePhone,
        gender: person.gender,
        ssn: person.ssn,
        dob: person.dob
      });
    }
  }

  get personFormControls() {
    return this.personForm.controls;
  }

  get genderControls() {
    return (this.personForm.get('gender') as FormGroup).controls;
  }

  back() {
    this.location.back();
  }

  async onSubmit() {
    console.log(this.personForm.value);
    let personFormValue = this.personForm.value;

    if (this.returnUserId) {
      let person = this.profileStoreService.person$.getValue();
      person.firstName = personFormValue.firstName;
      person.lastName = personFormValue.lastName;
      person.middleName = personFormValue.middleName;
      person.email = personFormValue.email;
      person.cellphone = personFormValue.cellPhone;
      person.alternatePhone = personFormValue.alternatePhone;
      person.gender = personFormValue.gender;
      person.ssn = personFormValue.ssn;
      person.dob = personFormValue.dob;

      await this.profileBackendService.updatePersonRequest(this.returnUserId, this.personForm.value);
      this.location.back();
    } else {
      this.onboardingStoreService.newCurrentOnboardingRequest();
      this.onboardingStoreService.setPersonOfCurrentOnboardingRequest(personFormValue);

      this.router.navigate(['/employee/address-form']);
    }
  }

}