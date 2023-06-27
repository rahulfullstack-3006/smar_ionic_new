import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviationdashboardPage } from './deviationdashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DeviationdashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviationdashboardPageRoutingModule {}
