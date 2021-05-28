import { LoginComponent } from './../auth/components/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ColumnOneComponent } from './layouts/column-one/column-one.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { AppModule } from '../app.module';
import {
  NgbCollapseModule,
  NgbDropdownModule,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    ColumnOneComponent,
    NavBarComponent,
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
  exports: [ColumnOneComponent],
})
export class SharedModule {}
