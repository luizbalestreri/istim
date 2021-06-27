import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegistroComponent } from './auth/components/registro/registro.component';
import { ResetPasswordComponent } from './auth/components/reset-password/reset-password.component';
import { AdminGuard } from './core/guards/admin.guard';
import { NoAuthGuard } from './core/guards/no-auth.guard';
import { NotFoundComponent } from './shared/components/errors/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home-page/home-page.module').then((x) => x.HomePageModule),
    canActivate: [],
  },
  { path: 'login', component: LoginComponent, canActivate: [NoAuthGuard] },
  {
    path: 'register',
    component: RegistroComponent,
    canActivate: [NoAuthGuard],
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    canActivate: [NoAuthGuard],
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
    path: 'carrinho',
    loadChildren: () =>
      import('./shopping-cart/shopping-cart.module').then(
        (x) => x.ShoppingCartModule
      ),
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
