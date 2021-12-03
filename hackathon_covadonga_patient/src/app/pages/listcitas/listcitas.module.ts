import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListcitasPageRoutingModule } from './listcitas-routing.module';

import { ListcitasPage } from './listcitas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListcitasPageRoutingModule
  ],
  declarations: [ListcitasPage]
})
export class ListcitasPageModule {}
