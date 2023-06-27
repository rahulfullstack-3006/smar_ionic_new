import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Smar2Page } from './smar2.page';

const routes: Routes = [
  {
    path: '',
    component: Smar2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Smar2PageRoutingModule {}
