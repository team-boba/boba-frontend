import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HrComponent } from './hr.component';
import { HireManagementComponent } from './component/hire-management/hire-management.component';

const routes: Routes = [
  {
    path: 'hire',
    component: HireManagementComponent
  },
  { 
    path: '', 
    component: HrComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HrRoutingModule { }
