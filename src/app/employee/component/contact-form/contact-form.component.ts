import { ProfileBackendService } from './../../shared/profile/profile-backend.service';
import { FormValidationService } from './../../../shared/form-validation/form-validation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { OnboardingStoreService } from './../../shared/onboarding/onboarding-store.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ProfileStoreService } from '../../shared/profile/profile-store.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  returnUserId: number = null;

  contactForm = this.fb.group({
    reference : this.fb.group({
      title: ['', [Validators.required]],
      relationship: ['', [Validators.required]]
    }),
    emergency : this.fb.group({
      title: ['', [Validators.required]],
      relationship: ['', [Validators.required]]
    })
  });

  constructor(
    private fb: FormBuilder,
    private formValidationService: FormValidationService,
    private onboardingStoreService: OnboardingStoreService,
    private router: Router,
    private location: Location,
    private profileStoreService: ProfileStoreService,
    private profileBackendService: ProfileBackendService
  ) { }

  ngOnInit(): void {
    let person = this.profileStoreService.person$.getValue();
    if (person != null) { 
      this.returnUserId = person.userId;
      let referenceContact = person.contacts.find(c=>c.reference);
      let emergencyContact = person.contacts.find(c=>c.emergency);

      this.contactForm.patchValue({
        reference: referenceContact,
        emergency: emergencyContact
      });
    }
  }

  get contactFormControls() {
    return this.contactForm.controls;
  }

  get referenceControls() {
    return (this.contactForm.get('reference') as FormGroup).controls;
  }

  get emergencyControls() {
    return (this.contactForm.get('emergency') as FormGroup).controls;
  }

  back() {
    this.location.back();
  }

  async onSubmit() {
    console.log(this.contactForm.value);
    
    let contactFormValue = this.contactForm.value;
    if (this.returnUserId) {
      let person = this.profileStoreService.person$.getValue();
      person.contacts = [contactFormValue.reference, contactFormValue.emergency];

      await this.profileBackendService.updateContactRequest(this.returnUserId, contactFormValue);
      this.location.back();
    } else {
      this.onboardingStoreService.setContactOfCurrentOnboardingRequest(contactFormValue);
      this.router.navigate(['/employee/personal-document-form']);
    }
    
  }

}