import { FormValidationService } from './../../../shared/form-validation/form-validation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { OnboardingRequest } from './../../domain/OnboardingRequest.model';
import { OnboardingStoreService } from './../../shared/onboarding/onboarding-store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

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
    private router: Router) { }

  ngOnInit(): void {
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

  onSubmit() {
    console.log(this.contactForm.value);
    this.onboardingStoreService.setContactOfCurrentOnboardingRequest(this.contactForm.value);

    this.router.navigate(['/employee/personal-document-form']);
  }

}