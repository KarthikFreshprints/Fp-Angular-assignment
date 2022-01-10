import { Component, OnInit } from '@angular/core';
import * as data from '../data.json';
import { Router } from '@angular/router';
import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: any = (data as any).default;
  allProducts: any = (data as any).default;
  order: string = 'name';
  price: string = 'price'
  reverse: boolean = false;
  caseInsensitive: boolean = false;
  sortedCollection: any[] | undefined;



  constructor(private route: Router,private orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.products, 'name');
    this.sortedCollection = orderPipe.transform(this.products, 'price');
  }

  onselectProduct(product:any){
      this.route.navigate(['/prodDetails', product.name]);
  }

  onFetch(value: any){
   value = this.products.sort();
  }

  setDescending(value: string) {
    if (this.order === value) {
      this.reverse = true;
    }

    this.order = value;
  }

  setAscending(value: string) {
    if (this.order === value) {
      this.reverse = false;
    }

    this.order = value;
  }

  sortPrice(value: string) {
    if (this.order === value) {
      this.reverse = false;
    }

    this.order = value;
  }

  onSearch(event: any) {
    this.products = this.allProducts.filter((product: any) => {
      return product['name'].toLowerCase().includes(event.target.value.toLowerCase())
    })
  }



  ngOnInit(): void {
  }

}
