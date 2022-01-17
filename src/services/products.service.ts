import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Product } from "src/app/models/Product.model";
@Injectable()
export class ProductsService{
    products:Product[]=[new Product('',0,0,'')];
    cartItem:number=0;
    itemsChanged=new Subject<number>();
    productsChanged=new Subject<Product[]>();
    loading:boolean=true;
    loadingSubject=new Subject<boolean>();
    constructor(private http:HttpClient){}
    fetchProducts(){
      this.loadingSubject.next(true);
      this.http.get<{products:Product[]}>('https://ebuymait.herokuapp.com/api/v1/products').subscribe((res)=>{
            this.products=res.products;
            this.productsChanged.next(this.products);
            this.loadingSubject.next(false);
      });
      
    }
    increaseCartItem(){
      this.cartItem+=1;
      console.log(this.cartItem);
      this.itemsChanged.next(this.cartItem);
    }
    searchProducts(key:string){
      this.loadingSubject.next(true);
      this.http.get<{products:Product[]}>(`https://ebuymait.herokuapp.com/api/v1/products?keyword=${key}`).subscribe((res)=>{
        this.products=res.products;
        this.productsChanged.next(this.products);
        this.loadingSubject.next(false);
      });
    }
}