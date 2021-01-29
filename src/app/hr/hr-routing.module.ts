import { HouseManagementComponent } from './component/house-management/house-management.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HrComponent } from './hr.component';


const routes: Routes = [
  {
    path: 'houseManagement',
    component: HouseManagementComponent
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
