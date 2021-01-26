import { PersonFormComponent } from './component/person-form/person-form.component';
import { AddressFormComponent } from './component/address-form/address-form.component';
import { ContactFormComponent } from './component/contact-form/contact-form.component';
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
    path: 'contact-form',
    component: ContactFormComponent
  },
  {
    path: 'employee-form',
    component: EmployeeFormComponent
  },
  { 
    path: '', 
    component: EmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
