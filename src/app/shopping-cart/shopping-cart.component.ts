import { Component, Injector } from '@angular/core';

import { AppBase } from 'src/app/shared/components/app-base.component';
import { ShoppingCartService } from 'src/app/shopping-cart/shopping-cart.service';

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
  }

  removeItemFromShoppingCart(index: number): void {
    this._shoppingCartService.removeItemFromShoppingCart(index);
  }
}
