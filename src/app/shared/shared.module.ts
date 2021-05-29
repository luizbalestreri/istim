import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
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
import { SnackbarComponent } from './components/snackbar/snackbar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ColumnOneComponent,
    NavBarComponent,
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
  exports: [ColumnOneComponent],
})
export class SharedModule {}
