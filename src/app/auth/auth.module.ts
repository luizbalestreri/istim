import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroComponent } from './components/registro/registro.component';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestInterceptor } from '../core/interceptors/request-interceptor';

@NgModule({
  declarations: [RegistroComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [RegistroComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
  ],
})
export class AuthModule {}
