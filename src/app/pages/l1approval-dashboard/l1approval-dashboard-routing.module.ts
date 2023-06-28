import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { L1approvalDashboardPage } from './l1approval-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: L1approvalDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class L1approvalDashboardPageRoutingModule {}
