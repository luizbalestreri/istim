import {
  Component,
  VERSION,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { UserService } from './../../../core/user/user.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavBarComponent implements OnInit {
  search = new FormControl();
  isMenuCollapsed: boolean = true;
  @Output() searchChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _userService: UserService) {}

  ngOnInit() {
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
