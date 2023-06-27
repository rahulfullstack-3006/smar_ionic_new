import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Smar2PageRoutingModule } from './smar2-routing.module';

import { Smar2Page } from './smar2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Smar2PageRoutingModule
  ],
  declarations: [Smar2Page]
})
export class Smar2PageModule {}
