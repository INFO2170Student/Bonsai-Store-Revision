import { Component, OnInit } from '@angular/core';
import { ShoppingCartProduct } from '../shopping-cart-product';
import { ShoppingCartProductService } from '../services/shopping-cart-product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  ShoppingCartProduct: ShoppingCartProduct[];
  constructor(
    private _ShoppingCartProductService: ShoppingCartProductService
  ) {}

  ngOnInit() {
    this.ShoppingCartProduct =
      this._ShoppingCartProductService.getShoppingCartProduct();
  }

  addToCart(ShoppingCartProduct): void {}
}
