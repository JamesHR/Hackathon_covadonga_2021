import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnfermedadesPage } from './enfermedades.page';

const routes: Routes = [
  {
    path: '',
    component: EnfermedadesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnfermedadesPageRoutingModule {}
