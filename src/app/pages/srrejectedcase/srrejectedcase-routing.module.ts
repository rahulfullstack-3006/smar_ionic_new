import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SrrejectedcasePage } from './srrejectedcase.page';

const routes: Routes = [
  {
    path: '',
    component: SrrejectedcasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SrrejectedcasePageRoutingModule {}
