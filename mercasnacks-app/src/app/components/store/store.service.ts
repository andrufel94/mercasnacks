import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, Jsonp } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// Models
import { Product } from '../../models/product';

@Injectable()
export class StoreService {
    public url: string;

    constructor(
        private _http: Http
    ) {
        this.url = "https://api.myjson.com/bins/1gbraw"; // URL to get products, move value to config 
    }

    //  Method: transform list of products to format specific
    private transformProducts(productsUnformat): Product[] {
        return productsUnformat.map((product) => {
            let productSimple = new Product();
            
            productSimple.special_price = product.special_price;
            productSimple.price = (product.price == null) ? 0 : product.price;
            productSimple._id = product._id;
            productSimple.active = product.active;
            productSimple.name = product.name;
            productSimple.image_url = product.image_url;
            
            return productSimple;
        });
    }

    //  Method: Get all product by url
    getProductsByUrl() {   
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        
        return this._http.get(this.url, { headers: headers }).map(res => this.transformProducts(res.json().retailer.products));
    }

    //  Method: Get all product into shopping cart
    getProductsCart(){
        let aProductsCart: Product[];
        aProductsCart = JSON.parse(localStorage.getItem('aProductsCart'));

        if(aProductsCart == null){
            aProductsCart = [];
        }
        return aProductsCart;
    }

    //  Method: Save a product into shopping cart
    saveProductsCart(product: Product){
        let aProductsCart: Product[];
        aProductsCart = this.getProductsCart();
        aProductsCart.push(product);        

        localStorage.setItem('aProductsCart', JSON.stringify(aProductsCart));
        return aProductsCart;
    }

    //  Method: Sort array product by preci
    sortProducts(aProductsUnsort: Product[], sValue: string ,order: number){
        aProductsUnsort.sort(function (a, b) {
            if (a[sValue] > b[sValue]) {
              return 1 * order;
            }
            if (a[sValue] < b[sValue]) {
              return -1 * order;
            }
            // a must be equal to b
            return 0;
          });
    }
}