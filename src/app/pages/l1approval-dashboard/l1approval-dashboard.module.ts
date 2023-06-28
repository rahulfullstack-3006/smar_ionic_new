import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { L1approvalDashboardPageRoutingModule } from './l1approval-dashboard-routing.module';

import { L1approvalDashboardPage } from './l1approval-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    L1approvalDashboardPageRoutingModule
  ],
  declarations: [L1approvalDashboardPage]
})
export class L1approvalDashboardPageModule {}
