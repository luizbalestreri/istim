import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { StoreComponent } from './store.component';

const routes: Routes = [
  {
    path: '',
    component: StoreComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}