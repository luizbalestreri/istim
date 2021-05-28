import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [RegistroComponent, LoginComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
  ],
  exports:[
    RegistroComponent,
    MatButtonModule,
    MatIconModule,
    MatInputModule
  ]
})
export class AuthModule {}