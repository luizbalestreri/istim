import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, ILoginCredentials } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor(private _authService: AuthService,
  private _router: Router,
  private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
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
        console.log('Sucesso');
        this._router.navigate(['/']);
      },
      (err) => {
        console.log('Erro');
      }
    );
  }
}
