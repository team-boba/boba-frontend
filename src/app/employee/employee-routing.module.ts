import { EmployeeFormComponent } from './component/employee-form/employee-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee.component';

const routes: Routes = [
  { 
    path: '', 
    component: EmployeeComponent
  },
  {
    path: 'employeeForm',
    component: EmployeeFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
