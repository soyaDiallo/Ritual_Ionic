import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AwardsAboutPage } from './awards-about.page';

const routes: Routes = [
  {
    path: '',
    component: AwardsAboutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AwardsAboutPageRoutingModule {}
