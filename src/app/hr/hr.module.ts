import { HouseManagementComponent } from './component/house-management/house-management.component';
import { ConfirmationDialogModule } from './../confirmation-dialog/confirmation-dialog.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { DataTablesModule } from 'angular-datatables';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HrRoutingModule } from './hr-routing.module';
import { HrComponent } from './hr.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedcomponentsModule } from '../sharedcomponents/sharedcomponents.module';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    HrComponent,
    HouseManagementComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HrRoutingModule,
    FontAwesomeModule,
    ConfirmationDialogModule,
    FormsModule,
    ReactiveFormsModule,
    SharedcomponentsModule,
    MatTableModule,
    MatToolbarModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HrModule {

}
