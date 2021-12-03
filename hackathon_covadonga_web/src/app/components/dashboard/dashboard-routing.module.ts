import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { VisitsComponent } from './visits/visits.component';
import { UsersComponent } from './users/users.component';
import { PatientsComponent } from './patients/patients.component';
import { EmergenciesComponent } from './emergencies/emergencies.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children:[
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'visits', component: VisitsComponent},
    {path: 'patients', component: PatientsComponent},
    {path: 'emergencies', component: EmergenciesComponent}
  ]}
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
