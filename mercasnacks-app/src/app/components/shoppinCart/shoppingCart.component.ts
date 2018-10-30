import { Component } from '@angular/core';
import { OnInit, DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';
// Services
import { StoreService } from "../store/store.service";
// Models
import { Product } from '../../models/product';
import { List } from 'linqts';

@Component({
  selector: 'shoppingCart',
  templateUrl: './shoppingCart.component.html',
  styleUrls: ['./shoppingCart.component.css'],
  providers: [StoreService]
})
export class ShoppingCartComponent implements OnInit, DoCheck {
  public title;
  public shoppingCartProducts: Product[];
  public totalPrice: number;

  constructor(
    private _storeService: StoreService
  ) {
    this.title = "Tu Carrito";
  }
  
  //Life Hooks
  ngOnInit() {
    // this.getProducts();
    // this.updateTotalPrice();
  }

  ngDoCheck(){
    this.getProducts();
    this.updateTotalPrice();
  }

  // Method: Get all products
  getProducts() {
    this.shoppingCartProducts = this._storeService.getProductsCart();
  }

  // Method: Update total price of all carts products
  // Move this method to service
  updateTotalPrice(){
    let sum = 0;
    this.shoppingCartProducts.forEach( product => {
      sum += product.price;
    });
    this.totalPrice = sum;
  }
}
