import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AgeRangeComponent } from './ageRange.component';

const routes: Routes = [
  {
    path: '',
    component: AgeRangeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgeRangeRoutingModule {}
