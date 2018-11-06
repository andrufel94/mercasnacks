import { Component, DoCheck } from '@angular/core';
// Services
import { ProductService } from "./services/products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent implements DoCheck {

  public title: String;
  public countProductsCart: number;

  constructor(
    private _productService: ProductService
  ) {
    this.title = 'mercasnacks-material-app';
    this.countProductsCart = 0;
  }

  // Life hooks
  ngDoCheck() {
    this.getCountProducts();
  }

  //  ****************************************************
  //  Author: Andres Luque    Update: 2018/11/03
  //  Method: Get number products into shopping cart
  //  ****************************************************
  getCountProducts() {
    this.countProductsCart = this._productService.getCountProductsCart();
  }

}
