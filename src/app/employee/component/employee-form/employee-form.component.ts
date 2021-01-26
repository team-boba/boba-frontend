import { OnboardingRequest } from './../../domain/OnboardingRequest.model';
import { OnboardingBackendService } from './../../shared/onboarding/onboarding-backend.service';
import { FormValidationService } from './../../../shared/form-validation/form-validation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  visaTypes = ['h1b', 'opt', 'greencard'];
  personNames = ['henry', 'angelina', 'boba'];

  avatarLabel: string = "Avatar";

  constructor(
    private fb: FormBuilder,
    private formValidationService: FormValidationService,
    private onboardingBackendService: OnboardingBackendService
  ) { }

  ngOnInit(): void {
  }

  employeeForm = this.fb.group({
    title: ['', [Validators.required]],
    manager: [''],
    startDate: ['', [Validators.required]],
    endDate: ['', ],
    avatar: [''],
    car: [''],
    visaStatus: this.fb.group({
      visaType: [''],
      visaStartDate: [''],
      visaEndDate: ['']
    }),
    driverLicense: [''],
    driverLicenseExpirationDate: ['', [this.formValidationService.dateAfterValidator(null)]]
  });

  get employeeFormControls() {
    return this.employeeForm.controls;
  }

  get visaStatusControls() {
    return (this.employeeForm.get('visaStatus') as FormGroup).controls;
  }

  onSubmit() {
    console.log(this.employeeForm.value);
    let onboardingRequest: OnboardingRequest = new OnboardingRequest();
    onboardingRequest.employeeRequest = this.employeeForm.value;
    this.onboardingBackendService.submitOnboardingRequest(onboardingRequest).subscribe();
  }

  onAvatarImageUploadedToS3Event(url) {
    this.employeeForm.patchValue({
      avatar: url
    });
  }

  validateEndDate(): ValidatorFn {
    if (!this.employeeForm.value['startDate']) return null;
    return this.formValidationService.dateAfterValidator(this.employeeForm.value['dateAfter']);
  }
}
