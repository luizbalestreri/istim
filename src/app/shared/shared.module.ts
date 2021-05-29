import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LoginbtnComponent } from './components/loginbtn/loginbtn.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ColumnOneComponent } from './layouts/column-one/column-one.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import {
  NgbCollapseModule,
  NgbDropdownModule,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './../auth/components/login/login.component';
import { SnackbarService } from './components/snackbar/snackbar.service';
import { SnackbarComponent } from './components/snackbar/snackbar.component';

@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    ColumnOneComponent,
    NavBarComponent,
    LoginbtnComponent,
    SnackbarComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    BrowserModule,
    NgbDropdownModule,
    NgbCollapseModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [ColumnOneComponent, LoginComponent],
})
export class SharedModule {}
