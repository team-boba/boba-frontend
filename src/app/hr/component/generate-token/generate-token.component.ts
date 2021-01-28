import { HrBackendService } from './../../shared/hr-backend.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormValidationService } from 'src/app/shared/form-validation/form-validation.service';

@Component({
  selector: 'app-generate-token',
  templateUrl: './generate-token.component.html',
  styleUrls: ['./generate-token.component.css']
})
export class GenerateTokenComponent implements OnInit {
  validDurationOptions = [15, 30, 60];
  houseIdOptions = [1, 2, 3];

  constructor(
    private fb: FormBuilder,
    private formValidationService: FormValidationService,
    private hrBackendService: HrBackendService
  ) { }

  ngOnInit(): void {
  }

  generateTokenForm = this.fb.group({
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    validDuration: ['', [Validators.required, this.formValidationService.selectionNotEmptyValidator()]],
    houseId: ['', [Validators.required, this.formValidationService.selectionNotEmptyValidator()]]
  });

  get generateTokenFormControls() {
    return this.generateTokenForm.controls;
  }

  onSubmit() {
    this.hrBackendService.generateRegistrationToken(this.generateTokenForm.value).subscribe();
    alert("Email is sent to employee for registration.")
  }
}
