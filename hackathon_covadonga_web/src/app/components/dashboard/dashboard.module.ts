import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { VisitsFormComponent } from './visits/visits-form/visits-form.component';
import { UsersComponent } from './users/users.component';
import { UsersFormComponent } from './users/users-form/users-form.component';
import { VisitsComponent } from './visits/visits.component';

import { ShareModule } from '../../shared/share.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { PatientsComponent } from './patients/patients.component';
import { PatientsFormComponent } from './patients/patients-form/patients-form.component';
import { EmergenciesComponent } from './emergencies/emergencies.component';
import { EmergenciesFormComponent } from './emergencies/emergencies-form/emergencies-form.component'


@NgModule({
  declarations: [DashboardComponent, HomeComponent, VisitsFormComponent, UsersComponent, UsersFormComponent, VisitsComponent, PatientsComponent, PatientsFormComponent, EmergenciesComponent, EmergenciesFormComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ShareModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    MatDatepickerModule
  ]
})
export class DashboardModule { }
