import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AppBase } from 'src/app/shared/components/app-base.component';
import { GameService } from './../game.service';
import { CategoryService } from './../../category/category.service';
import { IGame } from './../interfaces/IGame';
import { AgeRangeService } from 'src/app/ageRange/ageRange.service';
import { ShoppingCartService } from 'src/app/shopping-cart/shopping-cart.service';
import { IShoppingCartItem } from '../../shopping-cart/interfaces/IShoppingCartItem';

@Component({
  templateUrl: './view-game.component.html',
  styleUrls: ['./view-game.component.scss'],
})
export class ViewGameComponent extends AppBase implements OnInit {
  constructor(
    _injector: Injector,
    private _activedRoute: ActivatedRoute,
    private _router: Router,
    private _gameService: GameService,
    private _shoppingCartService: ShoppingCartService,
    private _categoryService: CategoryService,
    private _ageRangeService: AgeRangeService
  ) {
    super(_injector);
  }

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

  addItemToShoppingCart(): void {
    let data: IShoppingCartItem = {
      gameId: this.game.id,
      value: this.game.value,
      title: this.game.title,
      image: this.game.image,
    };

    this._shoppingCartService.addItemToShoppingCart(data);
    this._snackbarService.success('Jogo adicionado ao carrinho!');
    this._router.navigate(['carrinho']);
  }
}
