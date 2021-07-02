import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../core/user/user-info.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  username: string | null = '';

  constructor(private _userInfoService: UserInfoService) {}

  ngOnInit(): void {
    this._userInfoService.getUser().subscribe((res) => {
      this.username = res.username;
    });
  }
}
