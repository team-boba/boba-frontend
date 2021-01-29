import { ConfirmationDialogModule } from './../confirmation-dialog/confirmation-dialog.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HrRoutingModule } from './hr-routing.module';
import { HrComponent } from './hr.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HireManagementComponent } from './component/hire-management/hire-management.component';
import { UpdateStatusComponent } from './component/hire-management/update-status/update-status.component';
import { GenerateTokenComponent } from './component/generate-token/generate-token.component';
import { ProfileSummaryComponent } from './component/profile-summary/profile-summary.component';
import { SharedcomponentsModule } from '../sharedcomponents/sharedcomponents.module';
import { VisaStatusManagementComponent } from './component/visa-status-management/visa-status-management.component';

@NgModule({
  declarations: [
    HrComponent,
    HireManagementComponent,
    UpdateStatusComponent,
    GenerateTokenComponent,
    ProfileSummaryComponent,
    VisaStatusManagementComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HrRoutingModule,
    FontAwesomeModule,
    ConfirmationDialogModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    SharedcomponentsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HrModule {

}
