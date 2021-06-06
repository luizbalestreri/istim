import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';

@Component({
  templateUrl: 'confirm-dialog.component.html',
})
export class ConfirmDialogComponent {
  confirmResult!: Subject<boolean>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ConfirmDialogComponent>
  ) {}

  clickYes(): void {
    this.confirmResult.next(true);
  }

  clickNo(): void {
    this.confirmResult.next(false);
  }
}
