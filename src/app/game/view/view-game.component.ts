import { IGameInfo } from './../interfaces/IGameInfo';
import { Component, OnInit, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AppBase } from 'src/app/shared/components/app-base.component';
import { GameService } from './../game.service';
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
    private _shoppingCartService: ShoppingCartService
  ) {
    super(_injector);
  }

  game!: IGameInfo;

  ngOnInit(): void {
    this._activedRoute.params.subscribe((res) => {
      this._gameService.getById(res.gameId).subscribe(
        (res) => {
          if (!res) {
            this._router.navigate(['not-found']);
          }

          this.game = res;
          console.log(res)
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
      ageRange: this.game.ageRange.range,
    };

    this._shoppingCartService.addItemToShoppingCart(data);
    this._snackbarService.success('Jogo adicionado ao carrinho!');
    this._router.navigate(['carrinho']);
  }
}
