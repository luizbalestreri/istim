import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgbCollapseModule,
  NgbDropdownModule,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ColumnOneComponent } from './layouts/column-one/column-one.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ColumnOneComponent,
    NavBarComponent,
    SnackbarComponent,
    ConfirmDialogComponent,
    SafeHtmlPipe,
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    NgbDropdownModule,
    NgbCollapseModule,
    ReactiveFormsModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
  ],
  exports: [ColumnOneComponent, SafeHtmlPipe],
})
export class SharedModule {}
