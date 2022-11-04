import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartProduct } from '../shopping-cart-product';

@Component({
  selector: 'app-shopping-cart-product',
  templateUrl: './shopping-cart-product.component.html',
  styleUrls: ['./shopping-cart-product.component.css'],
})
export class ShoppingCartProductComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Input() ShoppingCartProduct: ShoppingCartProduct | null = null;
}
