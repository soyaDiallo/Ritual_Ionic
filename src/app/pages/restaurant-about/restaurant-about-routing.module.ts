import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantAboutPage } from './restaurant-about.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantAboutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantAboutPageRoutingModule {}
