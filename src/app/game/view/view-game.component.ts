import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from './../game.service';
import { IGame } from './../interfaces/IGame';

@Component({
  templateUrl: './view-game.component.html',
  styleUrls: ['./view-game.component.scss'],
})
export class ViewGameComponent implements OnInit {
  constructor(
    private _activedRoute: ActivatedRoute,
    private _router: Router,
    private _gameService: GameService
  ) {}

  game!: IGame;

  ngOnInit(): void {
    this._activedRoute.params.subscribe((res) => {
      this._gameService.getById(res.gameId).subscribe(
        (res) => {
          if (!res) {
            this._router.navigate(['not-found']);
          }

          this.game = res;
        },
        () => {
          this._router.navigate(['not-found']);
        }
      );
    });
  }
}
