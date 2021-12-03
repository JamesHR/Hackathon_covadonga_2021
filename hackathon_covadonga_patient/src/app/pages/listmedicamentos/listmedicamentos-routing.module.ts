import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListmedicamentosPage } from './listmedicamentos.page';

const routes: Routes = [
  {
    path: '',
    component: ListmedicamentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListmedicamentosPageRoutingModule {}
