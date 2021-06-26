import {
  Component,
  VERSION,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { IUserLoggedInfo } from 'src/app/core/user/IUserLoggedInfo';
import { UserService } from './../../../core/user/user.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  styles: [`
    ::ng-deep .dropdown-menu.show { background:#3c3c3c;}
    ::ng-deep .dropdown-item { color:#00ccff !important; }
  `]
})
export class NavBarComponent implements OnInit {
  username: string = '';

  search = new FormControl();
  isMenuCollapsed: boolean = true;
  @Output() searchChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _userService: UserService) {}

  ngOnInit() {
    this._userService.getUser().subscribe((res) => {
      this.username = res.username;
    });

    this.search.valueChanges.pipe(debounceTime(200)).subscribe((res) => {
      this.searchChange.emit(res);
    });
  }

  userIsLogged(): boolean {
    return this._userService.isLogged();
  }

  logout(): void {
    this._userService.logout();
  }
}
