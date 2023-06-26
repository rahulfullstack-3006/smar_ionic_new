import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Smar1PageRoutingModule } from './smar1-routing.module';

import { Smar1Page } from './smar1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Smar1PageRoutingModule
  ],
  declarations: [Smar1Page]
})
export class Smar1PageModule {}
