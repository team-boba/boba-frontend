import { ConfirmationDialogModule } from './../confirmation-dialog/confirmation-dialog.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrRoutingModule } from './hr-routing.module';
import { HrComponent } from './hr.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GenerateTokenComponent } from './component/generate-token/generate-token.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedcomponentsModule } from '../sharedcomponents/sharedcomponents.module';

@NgModule({
  declarations: [
    HrComponent,
    GenerateTokenComponent
  ],
  imports: [
    CommonModule,
    HrRoutingModule,
    FontAwesomeModule,
    ConfirmationDialogModule,
    FormsModule,
    ReactiveFormsModule,
    SharedcomponentsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HrModule {

}
