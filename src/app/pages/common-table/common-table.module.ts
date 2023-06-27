import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommonTablePageRoutingModule } from './common-table-routing.module';

import { CommonTablePage } from './common-table.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommonTablePageRoutingModule
  ],
  declarations: [CommonTablePage]
})
export class CommonTablePageModule {}
