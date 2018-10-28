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
    public itemsPerRow;
    public rows;

    constructor(
        private _productService: StoreService
    ) {
        this.itemsPerRow = 3; // Number of card by row, move value to config
    }

    ngOnInit() {
        this.getProducts();
    }

    // Method: Get all products
    getProducts() {
        this._productService.getProjectsByUrl().subscribe(
            res => {
                this.products = res;
                this.rows = Array.from(
                    Array(Math.ceil(this.products.length / this.itemsPerRow)).keys()
                );
                console.log(this.products);
            },
            error => {
                console.log("Error: " + error);
                return error;
            }
        )
    }
}