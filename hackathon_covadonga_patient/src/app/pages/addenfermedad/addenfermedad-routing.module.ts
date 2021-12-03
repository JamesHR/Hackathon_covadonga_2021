import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddenfermedadPage } from './addenfermedad.page';

const routes: Routes = [
  {
    path: '',
    component: AddenfermedadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddenfermedadPageRoutingModule {}
