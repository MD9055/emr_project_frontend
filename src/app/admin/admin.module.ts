import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PhysicianComponent } from './physician/physician.component';
import { PatientComponent } from './patient/patient.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PhysicianComponent,
    PatientComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModuleModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class AdminModule { }
