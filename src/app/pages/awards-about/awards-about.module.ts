import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AwardsAboutPageRoutingModule } from './awards-about-routing.module';

import { AwardsAboutPage } from './awards-about.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AwardsAboutPageRoutingModule
  ],
  declarations: [AwardsAboutPage]
})
export class AwardsAboutPageModule {}
