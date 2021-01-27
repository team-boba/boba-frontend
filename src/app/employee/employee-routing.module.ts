import { EmployeeHomeComponent } from './component/employee-home/employee-home.component';
import { PersonFormComponent } from './component/person-form/person-form.component';
import { AddressFormComponent } from './component/address-form/address-form.component';
// import { ContactFormComponent } from './component/contact-form/contact-form.component';
import { EmployeeFormComponent } from './component/employee-form/employee-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee.component';

const routes: Routes = [
  {
    path: 'person-form',
    component: PersonFormComponent
  },
  {
    path: 'address-form',
    component: AddressFormComponent
  },
  {
    path: 'employee-form',
    component: EmployeeFormComponent
  },
  { 
    path: ':userId',
    component: EmployeeHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
