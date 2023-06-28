import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { L2approvalDashboardPage } from './l2approval-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: L2approvalDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class L2approvalDashboardPageRoutingModule {}
