import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmardashboardPage } from './smardashboard.page';

const routes: Routes = [
  {
    path: '',
    component: SmardashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmardashboardPageRoutingModule {}
