import { ConfirmationDialogModule } from './../confirmation-dialog/confirmation-dialog.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { HrComponent } from './hr.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HireManagementComponent } from './component/hire-management/hire-management.component';

@NgModule({
  declarations: [
    HrComponent,
    HireManagementComponent
  ],
  imports: [
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
