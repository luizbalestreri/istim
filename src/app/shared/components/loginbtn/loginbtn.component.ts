import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, ILoginCredentials } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'loginbtn',
  templateUrl: './loginbtn.component.html',
  styles: [
    `
      background-color: #343a40;
      a:link,
      a:visited {
        color: blue;
        display: inline-block;
      }
      a:hover,
      a:active {
        background-color: #343a40;
      }
    `,
  ],
})
export class LoginbtnComponent {
  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _formBuilder: FormBuilder
  ) {}

  form: FormGroup = this._formBuilder.group({
    email: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(40)],
    ],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  submit(): void {
    let data: ILoginCredentials = this.form.getRawValue();
    this._authService.authenticate(data).subscribe(
      (res) => {
        console.log('Sucesso');
        this._router.navigate(['/']);
      },
      (err) => {
        console.log('Erro');
      }
    );
  }
}