import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { UserInfoService } from 'src/app/core/user/user-info.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavBarComponent implements OnInit {
  username: string = '';

  search = new FormControl();
  isMenuCollapsed: boolean = true;
  @Output() searchChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(private _userInfoService: UserInfoService) {}

  ngOnInit() {
    this._userInfoService.getUser().subscribe((res) => {
      this.username = res.username;
    });

    this.search.valueChanges.pipe(debounceTime(200)).subscribe((res) => {
      this.searchChange.emit(res);
    });
  }

  userIsLogged(): boolean {
    return this._userInfoService.isLogged();
  }

  isAdmin(): boolean {
    return this._userInfoService.isAdmin();
  }

  logout(): void {
    this._userInfoService.logout();
  }
}
