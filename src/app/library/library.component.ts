import { Component, OnInit } from '@angular/core';

import { UserGameService } from './../game/user-game.service';
import { UserInfoService } from 'src/app/core/user/user-info.service';
import { IUserGameInfo } from '../game/interfaces/IUserGameInfo';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent implements OnInit {
  constructor(
    private _userInfoService: UserInfoService,
    private _userGameService: UserGameService
  ) {}

  userGames: IUserGameInfo[] = [];

  ngOnInit(): void {
    let userId: string = '';
    this._userInfoService.getUser().subscribe((res) => {
      userId = res.id;
    });

    this._userGameService.getAll(userId).subscribe((res) => {
      this.userGames = res;
    });
  }
}
