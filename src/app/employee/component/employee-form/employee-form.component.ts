import { S3bucketService } from './../../../shared/s3bucket/s3bucket.service';
import { OnboardingRequest } from './../../domain/OnboardingRequest.model';
import { OnboardingBackendService } from './../../shared/onboarding/onboarding-backend.service';
import { OnboardingStoreService } from './../../shared/onboarding/onboarding-store.service';
import { FormValidationService } from './../../../shared/form-validation/form-validation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { EmployeeRequest } from '../../domain/EmployeeRequest.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  visaTypes = ['h1b', 'opt', 'greencard'];
  personNames = ['henry', 'angelina', 'boba'];

  avatarFormData: FormData;
  avatarUrl: string;

  constructor(
    private fb: FormBuilder,
    private formValidationService: FormValidationService,
    private onboardingBackendService: OnboardingBackendService,
    private onboardingStoreService: OnboardingStoreService,
    private s3bucketService: S3bucketService,
    private router: Router
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

    this.onboardingStoreService.setEmployeeOfCurrentOnboardingRequest(this.employeeForm.value);
    let onboardingRequest: OnboardingRequest = this.onboardingStoreService.getCurrentOnboardingRequest();
    this.onboardingBackendService.submitOnboardingRequest(onboardingRequest).subscribe();

    this.router.navigate(['/employee']);
  }

  handleFileInput(files: FileList) {
    let formData = new FormData();
    let file: File = files.item(0);
    formData.append('file', file);

    this.avatarFormData = formData;
  }

  async uploadFile() {
    if (!this.avatarFormData || this.avatarUrl) {
      alert("Not available");
      return;
    }

    let s3Response = await this.s3bucketService.uploadFile(this.avatarFormData);
    if (s3Response.serviceStatus.success) {
      this.employeeForm.patchValue({
        avatar: s3Response.fileUrl
      });
      this.avatarUrl = s3Response.fileUrl;
    }
  }

  validateEndDate(): ValidatorFn {
    if (!this.employeeForm.value['startDate']) return null;
    return this.formValidationService.dateAfterValidator(this.employeeForm.value['dateAfter']);
  }
}
