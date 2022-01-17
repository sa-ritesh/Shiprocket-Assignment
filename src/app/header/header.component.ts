import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EMPTY_SUBSCRIPTION } from 'rxjs/internal/Subscription';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private productsService:ProductsService) { }
  itemCount:number=0;
  itemCountSubs:Subscription=EMPTY_SUBSCRIPTION;
  ngOnInit(): void {
    this.itemCount=this.productsService.cartItem;
    console.log("ok");
    this.productsService.itemsChanged.subscribe((res)=>{
         this.itemCount=res;
    })
  }
}
