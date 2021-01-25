import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './component/confirm-dialog/confirm-dialog.component';


@NgModule({
  declarations: [
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ConfirmDialogComponent
  ]
})
export class ConfirmationDialogModule { 

}
