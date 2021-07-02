import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MessageDialogComponent } from './message-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class MessageDialogService {
  constructor(private _dialog: MatDialog) {}

  message(title: string, body: string): void {
    this._dialog.open(MessageDialogComponent, {
      data: {
        title: title,
        body: body,
      },
    });
  }
}
