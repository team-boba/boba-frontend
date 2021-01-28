import { EmployeeHomeComponent } from './component/employee-home/employee-home.component';
import { PersonFormComponent } from './component/person-form/person-form.component';
import { AddressFormComponent } from './component/address-form/address-form.component';
import { ContactFormComponent } from './component/contact-form/contact-form.component';
import { PersonalDocumentFormComponent } from './component/personal-document-form/personal-document-form.component';
import { EmployeeFormComponent } from './component/employee-form/employee-form.component';
import { NgModule, Component } from '@angular/core';
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
    path: 'contact-form',
    component: ContactFormComponent
  },
  {
    path: 'personal-document-form',
    component: PersonalDocumentFormComponent
  },
  { 
    path: ':userId/:houseId',
    component: EmployeeHomeComponent
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
