import { Injector } from '@angular/core';
import { SnackbarService } from './snackbar/snackbar.service';

export abstract class AppBase {
  _snackbarService: SnackbarService;

  constructor(private _injector: Injector) {
    this._snackbarService = _injector.get(SnackbarService);
  }
}
