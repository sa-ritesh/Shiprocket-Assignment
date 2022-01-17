import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "src/app/models/Product.model";
@Injectable()
export class ProductsService{
    products:Product[]=[new Product('',0,0,'')];
    constructor(private http:HttpClient){}
    fetchProducts(){
      return this.http.get<{products:Product[]}>('https://ebuymait.herokuapp.com/api/v1/products');
    }
}