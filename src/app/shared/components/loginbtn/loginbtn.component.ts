import {Component, OnInit} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'loginbtn',
  templateUrl: './loginbtn.component.html',
  styles: [`
  background-color: #343a40;
    a:link, a:visited {
  ;
  color: blue;
  display: inline-block;
}

a:hover, a:active {
  background-color: #343a40
}
  `]
})

export class LoginbtnComponent implements OnInit{

  constructor(private authService: AuthService){}

  ngOnInit(): void {
  }


  onSubmit(f: NgForm){
    console.log(f.value);
    console.log(f.valid);
    this.authService.login(f.value)
  }
}

