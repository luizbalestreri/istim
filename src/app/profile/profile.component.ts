import { IUserLoggedInfo } from './../core/user/interfaces/IUserLoggedInfo';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfoService } from '../core/user/user-info.service';
import { UserService } from '../core/user/user.service';
import { AppBase } from '../shared/components/app-base.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit{
  
  username: string | null = 'a';
  email : string | null = 'a'
  constructor(
    private _router: Router,
    private _formBuilder: FormBuilder,
    private _userInfoService: UserInfoService,
    private _userService: UserService
    ) {
      
    }



    
  ngOnInit(): void {
    let userID : string = ''; 
    this._userInfoService.getUser().subscribe((res) => {
      userID = res.id
    });
    console.log(userID);
    this._userService.getById(userID).subscribe((res) => {
      this.formReg.get('user')?.setValue(res.user);
      this.formReg.get('email')?.setValue(res.email);
      this.formReg.get('phone')?.setValue(res.phone);
      this.formReg.get('id')?.setValue(userID);
    });
    this.formReg.disable();
  }



  formReg: FormGroup = this._formBuilder.group({
   id: [],
    user: [
      this.username,
      [Validators.required, Validators.minLength(2), Validators.maxLength(64)],
    ],
    email: ['', [Validators.required, Validators.email]],
    phone: [
      '',
      [Validators.required, Validators.minLength(8), Validators.maxLength(12)],
    ],
  });
}
