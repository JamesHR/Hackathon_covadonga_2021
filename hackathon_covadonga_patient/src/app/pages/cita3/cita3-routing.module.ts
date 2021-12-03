import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Cita3Page } from './cita3.page';

const routes: Routes = [
  {
    path: '',
    component: Cita3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Cita3PageRoutingModule {}
