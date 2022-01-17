import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Product } from "src/app/models/Product.model";
@Injectable()
export class ProductsService{
    products:Product[]=[new Product('',0,0,'')];
    cartItem:number=0;
    itemsChanged=new Subject<number>();
    constructor(private http:HttpClient){}
    fetchProducts(){
      return this.http.get<{products:Product[]}>('https://ebuymait.herokuapp.com/api/v1/products');
    }
    increaseCartItem(){
      this.cartItem+=1;
      console.log(this.cartItem);
      this.itemsChanged.next(this.cartItem);
    }
}