import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Smar1Page } from './smar1.page';

const routes: Routes = [
  {
    path: '',
    component: Smar1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Smar1PageRoutingModule {}
