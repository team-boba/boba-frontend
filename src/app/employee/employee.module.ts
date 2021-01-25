import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ConfirmationDialogModule } from './../confirmation-dialog/confirmation-dialog.module';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';

@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ConfirmationDialogModule,
    FontAwesomeModule
  ]
})
export class EmployeeModule { }
