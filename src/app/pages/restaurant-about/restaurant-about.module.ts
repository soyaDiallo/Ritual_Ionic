import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantAboutPageRoutingModule } from './restaurant-about-routing.module';

import { RestaurantAboutPage } from './restaurant-about.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantAboutPageRoutingModule
  ],
  declarations: [RestaurantAboutPage]
})
export class RestaurantAboutPageModule {}
