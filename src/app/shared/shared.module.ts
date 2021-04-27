import { LoginbtnComponent } from './components/header/loginbtn/loginbtn.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ColumnOneComponent } from './layouts/column-one/column-one.component';
import { NgbdDropdownFormModule } from './components/header/loginbtn/loginbtn.module';
import { NavBarComponent } from './components/header/navbar/navbar';
import { AppModule } from '../app.module';
import { NgbCollapseModule, NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    ColumnOneComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    NgbdDropdownFormModule,
    NgbDropdownModule,
    NgbCollapseModule,
    ReactiveFormsModule
  ],
  exports: [
    ColumnOneComponent
  ]
})
export class SharedModule { }
