import { Component, Injector } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppBase } from 'src/app/shared/components/app-base.component';
import { RegistroService } from './registro.service';
import { IRegistro } from './IRegistro';

@Component({
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent extends AppBase {
  constructor(
    _injector: Injector,
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _registroService: RegistroService
  ) {
    super(_injector);
  }

  formReg: FormGroup = this._formBuilder.group({
    id: [],
    user: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(64)],
    ],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    phone: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(12)],
    ],
  });

  submit(): void {
    let data: IRegistro = this.formReg.getRawValue();
    data.id = '';

    this._registroService.create(data).subscribe(
      (res) => {
        this._snackbarService.success(`Usuário registrado com sucesso!`);
        this._router.navigate(['login']);
        console.log(res);
      },
      (err) => {
        this._snackbarService.alert('Erro ao cadastrar usuário!');
        console.log(err);
      }
    );
  }
}
