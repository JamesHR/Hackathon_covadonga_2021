import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlergiasPageRoutingModule } from './alergias-routing.module';

import { AlergiasPage } from './alergias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlergiasPageRoutingModule
  ],
  declarations: [AlergiasPage]
})
export class AlergiasPageModule {}
