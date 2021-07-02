import { IUserGame } from './../game/interfaces/IUserGame';
import { Router } from '@angular/router';
import { Component, Injector, OnInit } from '@angular/core';

import { AppBase } from 'src/app/shared/components/app-base.component';
import { ShoppingCartService } from 'src/app/shopping-cart/shopping-cart.service';
import { IShoppingCartItem } from './interfaces/IShoppingCartItem';
import { UserGameService } from './../game/user-game.service';
import { UserInfoService } from '../core/user/user-info.service';
import { UserService } from '../core/user/user.service';

@Component({
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent extends AppBase implements OnInit {
  constructor(
    _injector: Injector,
    private _router: Router,
    private _shoppingCartService: ShoppingCartService,
    private _userInfoService: UserInfoService,
    private _userService: UserService,
    private _userGameService: UserGameService
  ) {
    super(_injector);

    if (_shoppingCartService.shoppingCartHasItems()) {
      this.items = JSON.parse(_shoppingCartService.getShoppingCart());
      this.setTotalItems();
    }
  }

  items: IShoppingCartItem[] = [];
  userId: string = '';

  totalItems: number = 0;

  ngOnInit(): void {
    this._userInfoService.getUser().subscribe((res) => {
      this.userId = res.id;
    });
  }

  removeItemFromShoppingCart(index: number): void {
    this.items.splice(index, 1);
    this._shoppingCartService.setItemsToShoppingCart(this.items);
    this.setTotalItems();

    this._snackbarService.success('Jogo removido do carrinho!');
  }

  setTotalItems(): void {
    let sum: number = 0;

    for (let i = 0; i < this.items.length; i++) {
      sum += +this.items[i].value;
    }

    this.totalItems = sum;
  }

  buyGames(): void {
    if (!this._userInfoService.isLogged()) this._router.navigate(['/login']);

    this._userService.getById(this.userId).subscribe((res) => {
      let timeDiff = Math.abs(Date.now() - new Date(res.birthDate).getTime());
      let age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);

      for (let i = 0; i < this.items.length; i++) {
        if (age < this.items[i].ageRange) {
          return this._messageDialogService.message(
            'Atenção!',
            `Você não possui a idade mínima para o jogo ${this.items[i].title}!`
          );
        }
      }

      let userGames: IUserGame[] = [];

      for (let i = 0; i < this.items.length; i++) {
        let userGame: IUserGame = {
          id: 0,
          gameId: this.items[i].gameId,
          applicationUserId: this.userId,
        };

        userGames.push(userGame);
      }

      this._userGameService.create(userGames).subscribe(
        () => {
          this._snackbarService.success(
            'Jogo adquirido, verifique sua biblioteca!'
          );

          this.resetShoppingCart();
          this._shoppingCartService.removeShoppingCart();
          this._router.navigate(['biblioteca']);
        },
        (err) => {
          this._messageDialogService.message(
            'Atenção!',
            `${err.error.message}!`
          );
        }
      );
    });
  }

  resetShoppingCart(): void {
    this.items = [];
    this.setTotalItems();
  }
}
