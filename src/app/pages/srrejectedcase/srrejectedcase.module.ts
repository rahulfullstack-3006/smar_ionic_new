import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SrrejectedcasePageRoutingModule } from './srrejectedcase-routing.module';

import { SrrejectedcasePage } from './srrejectedcase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SrrejectedcasePageRoutingModule
  ],
  declarations: [SrrejectedcasePage]
})
export class SrrejectedcasePageModule {}
