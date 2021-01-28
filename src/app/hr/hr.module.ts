import { ConfirmationDialogModule } from './../confirmation-dialog/confirmation-dialog.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HrRoutingModule } from './hr-routing.module';
import { HrComponent } from './hr.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HireManagementComponent } from './component/hire-management/hire-management.component';
import { ApplicationDetailComponent } from './component/application-detail/application-detail.component';
import { UpdateStatusComponent } from './component/hire-management/update-status/update-status.component';

@NgModule({
  declarations: [
    HrComponent,
    HireManagementComponent,
    ApplicationDetailComponent,
    UpdateStatusComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HrRoutingModule,
    FontAwesomeModule,
    ConfirmationDialogModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HrModule {

}
