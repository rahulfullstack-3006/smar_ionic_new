import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmardashboardPageRoutingModule } from './smardashboard-routing.module';

import { SmardashboardPage } from './smardashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmardashboardPageRoutingModule
  ],
  declarations: [SmardashboardPage]
})
export class SmardashboardPageModule {}
