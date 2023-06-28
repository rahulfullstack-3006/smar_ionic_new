import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RejectedCasesPageRoutingModule } from './rejected-cases-routing.module';

import { RejectedCasesPage } from './rejected-cases.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RejectedCasesPageRoutingModule
  ],
  declarations: [RejectedCasesPage]
})
export class RejectedCasesPageModule {}
