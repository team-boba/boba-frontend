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
import { ProfileNameSectionComponent } from './component/profile-name-section/profile-name-section.component';
import { ProfileAddressSectionComponent } from './component/profile-address-section/profile-address-section.component';
import { ProfileContactinfoSectionComponent } from './component/profile-contactinfo-section/profile-contactinfo-section.component';
import { ProfileEmploymentSectionComponent } from './component/profile-employment-section/profile-employment-section.component';
import { ProfileDocumentSectionComponent } from './component/profile-document-section/profile-document-section.component';

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeFormComponent,
    PersonFormComponent,
    VisaStatusManagementComponent,
    AddressFormComponent,
    EmployeeHomeComponent,
    ContactFormComponent,
    PersonalDocumentFormComponent,
    ProfileNameSectionComponent,
    ProfileAddressSectionComponent,
    ProfileContactinfoSectionComponent,
    ProfileEmploymentSectionComponent,
    ProfileDocumentSectionComponent
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
