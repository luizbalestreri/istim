import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, ILoginCredentials } from 'src/app/core/auth/auth.service';
import { AppBase } from 'src/app/shared/components/app-base.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends AppBase implements OnInit {
  constructor(
    _injector: Injector,
    private _authService: AuthService,
    private _router: Router,
    private _formBuilder: FormBuilder
  ) {
    super(_injector);
  }

  ngOnInit() {}

  form: FormGroup = this._formBuilder.group({
    email: [
      '',
      [Validators.required, Validators.email],
    ],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  submit(): void {
    let data: ILoginCredentials = this.form.getRawValue();
    this._authService.authenticate(data).subscribe(
      (res) => {
        this._snackbarService.info(`Bem vindo(a) ${res.body.user.username}!`);
        this._router.navigate(['/']);
      },
      (err) => {
        this._snackbarService.alert('E-mail ou senha inválidos!');
      }
    );
  }
}
