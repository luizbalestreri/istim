import {Component} from '@angular/core';

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
export class LoginbtnComponent {
}

