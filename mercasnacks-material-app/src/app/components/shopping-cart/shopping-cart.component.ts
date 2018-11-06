import { Component } from '@angular/core';
import { OnInit, DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';
// Services
import { ProductService } from "../../services/products.service";
// Models
import { Product } from '../../models/product';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  providers: [ProductService]
})
export class ShoppingCartComponent implements OnInit, DoCheck {
  public title;
  public shoppingCartProducts: Product[];
  public totalPrice: number;

  constructor(
    private _productService: ProductService
  ) {
    this.title = "Tu Carrito";
  }

  //Life Hooks
  ngOnInit() {
    // this.getProducts();
    // this.updateTotalPrice();
  }

  ngDoCheck() {
    this.getProducts();
    this.updateTotalPrice();
  }

  //  ****************************************************
  //  Author: Andres Luque    Update: 2018/11/03
  //  Method: Get all products
  //  ****************************************************
  getProducts() {
    this.shoppingCartProducts = this._productService.getProductsCart();
  }

  //  ****************************************************
  //  Author: Andres Luque    Update: 2018/11/03
  //  Method: Delete producto into shopping cart
  //  ****************************************************
  deleteProductCart(event, product) {
    this._productService.deleteProductCart(product);
  }

  //  ****************************************************
  //  Author: Andres Luque    Update: 2018/11/03
  //  Method: Update total price of all carts products -> Move to product service
  //  ****************************************************
  updateTotalPrice() {
    let sum = 0;
    this.shoppingCartProducts.forEach(product => {
      sum += product.price;
    });
    this.totalPrice = sum;
  }
}
