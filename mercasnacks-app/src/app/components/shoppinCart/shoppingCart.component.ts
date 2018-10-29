import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
// Services
import { StoreService } from "../store/store.service";
// Models
import { Product } from '../../models/product';

@Component({
  selector: 'shoppingCart',
  templateUrl: './shoppingCart.component.html',
  styleUrls: ['./shoppingCart.component.css'],
  providers: [StoreService]
})
export class ShoppingCartComponent implements OnInit {
  public title;
  public shoppingCartProducts: Product[];

  constructor(
    private _storeService: StoreService
  ) {
    this.title = "Tu Carrito";
  }

  ngOnInit() {
    this.getProducts();
  }

  // Method: Get all products
  getProducts() {
    this.shoppingCartProducts = this._storeService.getProductsCart();
  }
}
