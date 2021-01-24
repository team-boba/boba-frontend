import { ErrorPageComponent } from './component/error-page/error-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path: 'employee', 
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) 
  },
  { 
    path: 'hr', 
    loadChildren: () => import('./hr/hr.module').then(m => m.HrModule) 
  },
  {
    path: '**',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
