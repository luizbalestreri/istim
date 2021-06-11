import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class ConfirmDialogService {
  constructor(private _dialog: MatDialog) {}

  confirm(
    title: string,
    body: string,
    labelConfirm: string = 'Confirmar',
    labelCancell: string = 'Cancelar'
  ): MatDialogRef<any> {
    return this._dialog.open(ConfirmDialogComponent, {
      data: {
        title: title,
        body: body,
        labelConfirm: labelConfirm,
        labelCancell: labelCancell,
      },
      height: '800',
      width: '600',
    });
  }
}
