import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListmedicamentosPageRoutingModule } from './listmedicamentos-routing.module';

import { ListmedicamentosPage } from './listmedicamentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListmedicamentosPageRoutingModule
  ],
  declarations: [ListmedicamentosPage]
})
export class ListmedicamentosPageModule {}
