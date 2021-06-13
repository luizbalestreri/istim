import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from './../game.service';

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

  ngOnInit(): void {
    this._activedRoute.params.subscribe((res) => {
      this._gameService.getById(res.gameId).subscribe(
        (res) => {
          console.log(res);
          if (!res) {
            this._router.navigate(['not-found']);
          }
        },
        () => {
          this._router.navigate(['not-found']);
        }
      );
    });
  }
}
