import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { IShoppingCartItem } from './interfaces/IShoppingCartItem';

const KEY = 'shoppingCart';

@Injectable({ providedIn: 'root' })
export class ShoppingCartService {
  constructor(private _http: HttpClient) {}

  shoppingCartHasItems(): boolean {
    return !!this.getShoppingCart();
  }

  addItemToShoppingCart(shoppingCartItem: IShoppingCartItem): void {
    let shoppingCartItems: IShoppingCartItem[] = this.shoppingCartHasItems()
      ? JSON.parse(this.getShoppingCart())
      : [];

    let itemExists: boolean = false;

    for (let i = 0; i < shoppingCartItems.length; i++) {
      if (shoppingCartItems[i].gameId == shoppingCartItem.gameId) {
        itemExists = true;
        shoppingCartItems[i] = shoppingCartItem;
      }
    }

    if (!itemExists) shoppingCartItems.push(shoppingCartItem);

    this.setItemsToShoppingCart(shoppingCartItems);
  }

  setItemsToShoppingCart(shoppingCartItems: IShoppingCartItem[]): void {
    localStorage.setItem(KEY, JSON.stringify(shoppingCartItems));
  }

  getShoppingCart(): any {
    return localStorage.getItem(KEY);
  }

  removeShoppingCart(): void {
    localStorage.removeItem(KEY);
  }
}
