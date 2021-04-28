import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

@NgModule({
  declarations: [LoginComponent, RegistroComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports:[
    LoginComponent,
    RegistroComponent
  ]
})
export class AuthModule {}