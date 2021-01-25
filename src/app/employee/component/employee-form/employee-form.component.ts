import { FormValidationService } from './../../../shared/form-validation/form-validation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  visaTypes = ['h1b', 'opt', 'greencard'];
  personNames = ['henry', 'angelina', 'boba'];

  constructor(
    private fb: FormBuilder,
    private formValidationService: FormValidationService
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
  }

  handleFileInput(files: FileList) {
    this.employeeForm.patchValue({
      avatar: files.item(0)
    })
  }

  validateEndDate(): ValidatorFn {
    if (!this.employeeForm.value['startDate']) return null;
    return this.formValidationService.dateAfterValidator(this.employeeForm.value['dateAfter']);
  }
}
