import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cita2PageRoutingModule } from './cita2-routing.module';

import { Cita2Page } from './cita2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cita2PageRoutingModule
  ],
  declarations: [Cita2Page]
})
export class Cita2PageModule {}
