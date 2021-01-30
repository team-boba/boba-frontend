import { VisaStatus } from './../../domain/profile/VisaStatus.model';
import { ProfileBackendService } from './../../shared/profile/profile-backend.service';
import { ProfileStoreService } from './../../shared/profile/profile-store.service';
import { Location } from '@angular/common';
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
  visaTypes = ['Green Card','Citizen','H1-B', 'L2', 'F1(CPT/OPT)','H4'];

  avatarLabel: string = "Avatar";
  returnAvatarImageUrl: string = null;
  returnUserId: number = null;

  employeeForm = this.fb.group({
    title: ['', [Validators.required]],
    startDate: ['', [Validators.required]],
    endDate: ['', ],
    avatar: [''],
    car: [''],
    visaStatus: this.fb.group({
      visaType: ['', this.formValidationService.selectionNotEmptyValidator()],
      visaStartDate: [''],
      visaEndDate: ['']
    }),
    driverLicense: [''],
    driverLicenseExpirationDate: ['', [this.formValidationService.dateAfterValidator(null)]]
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
    this.returnAvatarImageUrl = person.employee.avatar;
    if (person != null) { 
      this.returnUserId = person.userId;
      this.employeeForm.patchValue({
        title: person.employee.title,
        startDate: person.employee.startDate,
        endDate: person.employee.endDate,
        avatar: person.employee.avatar,
        car: person.employee.car,
        visaStatus: {
          visaType: person.employee.visaStatus.visaType,
          visaStartDate: person.employee.visaStartDate,
          visaEndDate: person.employee.visaEndDate
        },
        driverLicense: person.employee.driverLicense,
        driverLicenseExpirationDate: person.employee.driverLicenseExpirationDate
      });
    }
  }

  get employeeFormControls() {
    return this.employeeForm.controls;
  }

  get visaStatusControls() {
    return (this.employeeForm.get('visaStatus') as FormGroup).controls;
  }

  async onSubmit() {
    console.log(this.employeeForm.value);

    let employeeFormValue = this.employeeForm.value;
    if (this.returnUserId) {
      let person = this.profileStoreService.person$.getValue();
      person.employee.title = employeeFormValue.title;
      person.employee.startDate = employeeFormValue.startDate;
      person.employee.endDate = employeeFormValue.endDate;
      person.employee.avatar = employeeFormValue.avatar;
      person.employee.car = employeeFormValue.car;
      person.employee.visaStatus.visaType = employeeFormValue.visaStatus.visaType;
      person.employee.visaStartDate = employeeFormValue.visaStatus.visaStartDate;
      person.employee.visaEndDate = employeeFormValue.visaStatus.visaEndDate;
      person.employee.driverLicense = employeeFormValue.driverLicense;
      person.employee.driverLicenseExpirationDate = employeeFormValue.driverLicenseExpirationDate;

      await this.profileBackendService.updateEmployeeRequest(this.returnUserId, employeeFormValue);
      this.location.back();
    } else {
      this.onboardingStoreService.setEmployeeOfCurrentOnboardingRequest(employeeFormValue);
      this.router.navigate(['/employee/contact-form']);
    }
  }

  back() {
    this.location.back();
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
