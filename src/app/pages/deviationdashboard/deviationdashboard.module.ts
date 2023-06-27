import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviationdashboardPageRoutingModule } from './deviationdashboard-routing.module';

import { DeviationdashboardPage } from './deviationdashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviationdashboardPageRoutingModule
  ],
  declarations: [DeviationdashboardPage]
})
export class DeviationdashboardPageModule {}
