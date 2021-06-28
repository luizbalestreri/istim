import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  username: string | null = '';

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.getUser().subscribe((res) => {
      this.username = res.username;
    });
  }

}
