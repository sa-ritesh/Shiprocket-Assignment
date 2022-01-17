import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/services/products.service';
import { Product } from '../models/Product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Product[]=[new Product('',0,0,'')];
  loading:boolean=true;
  constructor(private productsService:ProductsService) { }
  ngOnInit(){
    this.productsService.fetchProducts().subscribe((res)=>{
      this.loading=false;
         this.products=res.products;
         console.log(res);
    });
  }

}
