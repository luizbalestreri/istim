import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from '../core/guards/no-auth.guard';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
