import { VisaStatusManagementComponent } from './component/visa-status-management/visa-status-management.component';
import { SharedcomponentsModule } from './../sharedcomponents/sharedcomponents.module';
import { EmployeeFormComponent } from './component/employee-form/employee-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ConfirmationDialogModule } from './../confirmation-dialog/confirmation-dialog.module';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonFormComponent } from './component/person-form/person-form.component';
import { AddressFormComponent } from './component/address-form/address-form.component';
import { EmployeeHomeComponent } from './component/employee-home/employee-home.component';
import { ContactFormComponent } from './component/contact-form/contact-form.component';
import { PersonalDocumentFormComponent } from './component/personal-document-form/personal-document-form.component';

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeFormComponent,
    PersonFormComponent,
    VisaStatusManagementComponent,
    AddressFormComponent,
    EmployeeHomeComponent,
    ContactFormComponent,
    PersonalDocumentFormComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ConfirmationDialogModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedcomponentsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class EmployeeModule { }
