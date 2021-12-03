import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cita2Page } from './cita2.page';

const routes: Routes = [
  {
    path: '',
    component: Cita2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cita2PageRoutingModule {}
