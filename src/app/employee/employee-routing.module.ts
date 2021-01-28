import { VisaStatusManagementComponent } from './component/visa-status-management/visa-status-management.component';
import { PersonFormComponent } from './component/person-form/person-form.component';
import { AddressFormComponent } from './component/address-form/address-form.component';
// import { ContactFormComponent } from './component/contact-form/contact-form.component';
import { EmployeeFormComponent } from './component/employee-form/employee-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeComponent } from './employee.component';

const routes: Routes = [
  {
    path: 'visa-status-management',
    component: VisaStatusManagementComponent
  },
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
    path: '', 
    component: EmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
