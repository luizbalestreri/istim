import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CategoryComponent } from './category.component';
import { AuthGuard } from '../core/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
