import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitaPage } from './cita.page';

const routes: Routes = [
  {
    path: '',
    component: CitaPage
  },
  {
    path: 'cita2',
    loadChildren: () => import('./cita2/cita2.module').then( m => m.Cita2PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitaPageRoutingModule {}
