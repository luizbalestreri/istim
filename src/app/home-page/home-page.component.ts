import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from './../game/game.service';
import { IGame } from './../game/interfaces/IGame';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private _router: Router, private _gameService: GameService) {}

  games: IGame[] = [];

  carouselGames: IGame[] = [];

  ngOnInit(): void {
    this._gameService.getAll().subscribe((res) => {
      for (let i = 0; i < res.data.length; i++) {
        if (res.data[i].image && this.carouselGames.length < 3) {
          this.carouselGames.push(res.data[i]);
        }
      }

      this.games = res.data;
    });
  }

  redirectToGame(gameId: number): void {
    this._router.navigate(['/jogos/', gameId]);
  }
}
