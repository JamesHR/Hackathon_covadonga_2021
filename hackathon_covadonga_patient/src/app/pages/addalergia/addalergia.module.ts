import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddalergiaPageRoutingModule } from './addalergia-routing.module';

import { AddalergiaPage } from './addalergia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddalergiaPageRoutingModule
  ],
  declarations: [AddalergiaPage]
})
export class AddalergiaPageModule {}
