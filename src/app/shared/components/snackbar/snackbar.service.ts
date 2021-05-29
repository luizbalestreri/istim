import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from './snackbar.component';

@Injectable({ providedIn: 'root' })
export class SnackbarService {
  constructor(private _snackBar: MatSnackBar) {}

  success(msg: string) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 3000,
      data: msg,
      panelClass: ['bg-success'],
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
  }

  alert(msg: string) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 3000,
      data: msg,
      panelClass: ['bg-danger'],
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
  }

  info(msg: string) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 3000,
      data: msg,
      panelClass: ['bg-info'],
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
  }

  warn(msg: string) {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 3000,
      data: msg,
      panelClass: ['bg-warning'],
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
  }
}
