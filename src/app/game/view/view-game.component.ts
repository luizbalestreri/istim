import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GameService } from './../game.service';
import { CategoryService } from './../../category/category.service';
import { IGame } from './../interfaces/IGame';
import { AgeRangeService } from 'src/app/ageRange/ageRange.service';

@Component({
  templateUrl: './view-game.component.html',
  styleUrls: ['./view-game.component.scss'],
})
export class ViewGameComponent implements OnInit {
  constructor(
    private _activedRoute: ActivatedRoute,
    private _router: Router,
    private _gameService: GameService,
    private _categoryService: CategoryService,
    private _ageRangeService: AgeRangeService
  ) {}

  game!: IGame;
  ageRange!: number;
  category: string = '';

  ngOnInit(): void {
    this._activedRoute.params.subscribe((res) => {
      this._gameService.getById(res.gameId).subscribe(
        (res) => {
          if (!res) {
            this._router.navigate(['not-found']);
          }

          this.game = res;

          this._categoryService
            .getById(this.game.categoryId)
            .subscribe((res) => {
              this.category = res.title;
            });

          this._ageRangeService
            .getById(this.game.ageRangeId)
            .subscribe((res) => {
              this.ageRange = res.range;
            });
        },
        () => {
          this._router.navigate(['not-found']);
        }
      );
    });
  }
}
