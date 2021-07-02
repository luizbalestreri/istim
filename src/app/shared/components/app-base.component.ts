import { Injector } from '@angular/core';
import { ConfirmDialogService } from './confirm-dialog/confirm-dialog.service';
import { MessageDialogService } from './message-dialog/message-dialog.service';
import { SnackbarService } from './snackbar/snackbar.service';

export abstract class AppBase {
  _snackbarService: SnackbarService;
  _confirmDialogService: ConfirmDialogService;
  _messageDialogService: MessageDialogService;

  constructor(private _injector: Injector) {
    this._snackbarService = _injector.get(SnackbarService);
    this._confirmDialogService = _injector.get(ConfirmDialogService);
    this._messageDialogService = _injector.get(MessageDialogService);
  }
}
