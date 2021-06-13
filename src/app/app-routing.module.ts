import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './core/guards/admin.guard';
import { NotFoundComponent } from './shared/components/errors/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home-page/home-page.module').then((x) => x.HomePageModule),
    canActivate: [],
  },
  {
    path: 'categorias',
    loadChildren: () =>
      import('./category/category.module').then((x) => x.CategoryModule),
    canActivate: [AdminGuard],
  },
  {
    path: 'jogos',
    loadChildren: () => import('./game/game.module').then((x) => x.GameModule),
    canActivate: [],
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
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
