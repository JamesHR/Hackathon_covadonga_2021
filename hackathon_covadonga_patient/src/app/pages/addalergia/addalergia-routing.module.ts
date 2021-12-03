import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddalergiaPage } from './addalergia.page';

const routes: Routes = [
  {
    path: '',
    component: AddalergiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddalergiaPageRoutingModule {}
