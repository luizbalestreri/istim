import { SnackbarService } from './../../../shared/components/snackbar/snackbar.service';
import { RegistroService } from './registro.service';
import { IRegistro } from './IRegistro';
import { Component, OnInit, Injector } from '@angular/core';
import { FormBuilder,FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, ILoginCredentials } from 'src/app/core/auth/auth.service';
import { AppBase } from 'src/app/shared/components/app-base.component';

@Component({
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  providers: [SnackbarService]
})
export class RegistroComponent extends AppBase {

  constructor(
  _injector: Injector,  
  private _authService: AuthService,
  private _router: Router,
  private _formBuilder: FormBuilder,
  private _registroService: RegistroService
  ) { super(_injector);}

  ngOnInit(): void {
  }
  formReg: FormGroup = this._formBuilder.group({
    id: [],
    user: ['', 
    [Validators.required, Validators.minLength(2), Validators.maxLength(64)]
    ],
    email: [
      '',
      [Validators.required, Validators.email],
    ],
    password: ['', [Validators.required, Validators.minLength(6)]],
    phone: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]]
  });
  
  submit(): void {
    let data: IRegistro = this.formReg.getRawValue();
    data.id = +data.id;
    this._registroService.create(data).subscribe(
      (res) => {
        this._snackbarService.success(`${res.body.user.username} registrado com sucesso!`)
        console.log(res);
        this._router.navigate(['/']);
      },
      (err) => {
        this._snackbarService.alert('Erro ao cadastrar usuário')
        console.log(err)
      }
    )
  }
}
