import { GenerateTokenComponent } from './component/generate-token/generate-token.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HrComponent } from './hr.component';
import { HireManagementComponent } from './component/hire-management/hire-management.component';
import { UpdateStatusComponent } from './component/hire-management/update-status/update-status.component';

const routes: Routes = [
  {
    path: 'hire',
    component: HireManagementComponent,
    children: [
      { path: ':id', component: UpdateStatusComponent}
    ]
  },
  { 
    path: 'generate-token',
    component: GenerateTokenComponent
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
