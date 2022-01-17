import { Component, Input, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() product:Product=new Product('',0,0,'');
  constructor() { }

  ngOnInit(): void {
  }

}
