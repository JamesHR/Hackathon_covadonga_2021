import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListcitasPage } from './listcitas.page';

const routes: Routes = [
  {
    path: '',
    component: ListcitasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListcitasPageRoutingModule {}
