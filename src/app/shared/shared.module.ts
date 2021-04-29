import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LoginbtnComponent } from './components/loginbtn/loginbtn.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ColumnOneComponent } from './layouts/column-one/column-one.component';
import { NavBarComponent } from './components/navbar/navbar';
import { AppModule } from '../app.module';
import { NgbCollapseModule, NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    ColumnOneComponent,
    NavBarComponent,
    LoginbtnComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    BrowserModule,
    NgbDropdownModule,
    NgbCollapseModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ColumnOneComponent
  ]
})
export class SharedModule { }
