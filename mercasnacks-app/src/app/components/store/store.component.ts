import { Component } from "@angular/core";
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks'
// Services
import { StoreService } from "./store.service";
// Models
import { Product } from '../../models/product';

@Component({
    selector: 'store',
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.css'],
    providers: [StoreService]
})
export class StoreComponent implements OnInit {
    public products: Product[];
    // public productsCart: Product[];
    public itemsPerRow: number;
    public rows;
    public order: number;

    constructor(
        private _storeService: StoreService
    ) {
        this.itemsPerRow = 3; // Number of card by row, move value to config
        this.order = -1;
    }

    ngOnInit() {
        this.getProducts();
    }

    // Method: Get all products
    getProducts() {
        this._storeService.getProductsByUrl().subscribe(
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

    // Method: Save product selected into shopping cart
    saveProductCart(event, product) {
        this._storeService.saveProductsCart(product);
    }

    // Method: Sort list products
    sortProductsByPrice(){
        this._storeService.sortProducts(this.products, "price", this.order);
        this.order = this.order * -1;
    }
}