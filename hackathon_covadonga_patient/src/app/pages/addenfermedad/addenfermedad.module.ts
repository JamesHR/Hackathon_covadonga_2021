import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddenfermedadPageRoutingModule } from './addenfermedad-routing.module';

import { AddenfermedadPage } from './addenfermedad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddenfermedadPageRoutingModule
  ],
  declarations: [AddenfermedadPage]
})
export class AddenfermedadPageModule {}
