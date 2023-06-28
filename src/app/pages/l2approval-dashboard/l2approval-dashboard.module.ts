import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { L2approvalDashboardPageRoutingModule } from './l2approval-dashboard-routing.module';

import { L2approvalDashboardPage } from './l2approval-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    L2approvalDashboardPageRoutingModule
  ],
  declarations: [L2approvalDashboardPage]
})
export class L2approvalDashboardPageModule {}
