import { Component } from "@angular/core";
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks'
// Services
import { ProductService } from "../../services/products.service";
// Models
import { Product } from '../../models/product';

@Component({
    selector: 'store',
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.css'],
    providers: [ProductService]
})
export class StoreComponent implements OnInit {
    public products: Product[];
    public itemsPerRow;
    public rows;

    constructor(
        private _productService: ProductService
    ) {
        this.itemsPerRow = 3; // Number of card by row, move value to config
    }

    ngOnInit() {
        this.getProducts();
    }

    //  ****************************************************
    //  Author: Andres Luque    Update: 2018/11/03
    // Method: Get all products
    //  ****************************************************
    getProducts() {
        this._productService.getProductsByUrl().subscribe(
            res => {
                this.products = res;
                this.rows = Array.from(
                    Array(Math.ceil(this.products.length / this.itemsPerRow)).keys()
                );
            },
            error => {
                console.log("Error: " + error);
                return error;
            }
        );
    }

    //  ****************************************************
    //  Author: Andres Luque    Update: 2018/11/03
    // Method: Save product selected into shopping cart
    //  ****************************************************
    saveProductCart(event, product) {
        this._productService.saveProductsCart(product);
    }
}