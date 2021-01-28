import { ConfirmationDialogModule } from './../confirmation-dialog/confirmation-dialog.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { HrComponent } from './hr.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HouseManagementComponent } from './component/house-management/house-management.component';
import { HouseInfoComponent } from './component/house-management/house-info/house-info.component';

@NgModule({
  declarations: [
    HrComponent,
    HouseManagementComponent,
    HouseInfoComponent
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
