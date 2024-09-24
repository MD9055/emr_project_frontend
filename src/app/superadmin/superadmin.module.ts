import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperadminRoutingModule } from './superadmin-routing.module';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { AdminComponent } from './admin/admin.component';
import { PatientComponent } from './patient/patient.component';
import { PhysicianComponent } from './physician/physician.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashbaordComponent,
    AdminComponent,
    PatientComponent,
    PhysicianComponent,
    AddAdminComponent
  ],
  imports: [
    CommonModule,
    SuperadminRoutingModule,
    SharedModuleModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SuperadminModule { }
