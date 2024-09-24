import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../guards/auth.guard';
import { LayoutComponent } from '../shared-module/layout/layout.component';
import { PhysicianComponent } from './physician/physician.component';
import { PatientComponent } from './patient/patient.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      },
      {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [AuthGuard] // Protect this route
      },
      {
        path: "physician",
        component: PhysicianComponent,
        canActivate: [AuthGuard] // Protect this route
      },
      {
        path: "patient",
        component: PatientComponent,
        canActivate: [AuthGuard] // Protect this route
      },
      
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
