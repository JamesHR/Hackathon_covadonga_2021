import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnfermedadesPageRoutingModule } from './enfermedades-routing.module';

import { EnfermedadesPage } from './enfermedades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnfermedadesPageRoutingModule
  ],
  declarations: [EnfermedadesPage]
})
export class EnfermedadesPageModule {}
