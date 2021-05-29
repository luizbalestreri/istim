import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ValueComponent } from './value/value.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './core/auth/auth.service';

@NgModule({
  declarations: [AppComponent, ValueComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    SharedModule,
    NgbModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
