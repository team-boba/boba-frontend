import { FormValidationService } from './../../../shared/form-validation/form-validation.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    middleName: [''],
    email: ['', [Validators.required]],
    cellPhone: ['', [Validators.required]],
    relationship: ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private formValidationService: FormValidationService) { }

  ngOnInit(): void {
  }

  get contactFormControls() {
    return this.contactForm.controls;
  }

  onSubmit() {
    console.log(this.contactForm.value);
  }

}