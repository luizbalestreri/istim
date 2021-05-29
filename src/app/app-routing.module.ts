import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './core/guards/admin.guard';

const routes: Routes = [
  {
    path: 'categorias',
    loadChildren: () =>
      import('./category/category.module').then((x) => x.CategoryModule),
    canActivate: [AdminGuard],
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
