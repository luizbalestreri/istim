import { Component, Injector } from '@angular/core';

import { AppBase } from 'src/app/shared/components/app-base.component';
import { ShoppingCartService } from 'src/app/shopping-cart/shopping-cart.service';
import { IShoppingCartItem } from './interfaces/IShoppingCartItem';

@Component({
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent extends AppBase {
  constructor(
    _injector: Injector,
    private _shoppingCartService: ShoppingCartService
  ) {
    super(_injector);

    if (_shoppingCartService.shoppingCartHasItems()) {
      this.items = JSON.parse(_shoppingCartService.getShoppingCart());
      this.setTotalItems();
    }
  }

  items: IShoppingCartItem[] = [];

  totalItems: number = 0;

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
}
