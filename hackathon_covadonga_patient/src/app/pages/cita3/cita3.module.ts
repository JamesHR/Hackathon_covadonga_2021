import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Cita3PageRoutingModule } from './cita3-routing.module';

import { Cita3Page } from './cita3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Cita3PageRoutingModule
  ],
  declarations: [Cita3Page]
})
export class Cita3PageModule {}
