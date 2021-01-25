import { ConfirmationDialogModule } from './../confirmation-dialog/confirmation-dialog.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { HrComponent } from './hr.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [HrComponent],
  imports: [
    CommonModule,
    HrRoutingModule,
    FontAwesomeModule,
    ConfirmationDialogModule
  ]
})
export class HrModule {

}
