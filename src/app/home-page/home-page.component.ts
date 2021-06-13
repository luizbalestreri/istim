import { IGame } from './../game/interfaces/IGame';
import { GameService } from './../game/game.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private _gameService: GameService) {}

  games: IGame[] = [];

  ngOnInit(): void {
    this._gameService.getAll().subscribe((res) => {
      this.games = res.data;
      console.log(res);
    });
  }

  redirectToGame(gameId: number): void {
    console.log(gameId);
  }
}
