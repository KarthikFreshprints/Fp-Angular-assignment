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

  PRODUCTS: any = (data as any).default;
  allProducts: any = (data as any).default;

  // Variables for sorting data
  order: string = 'name';
  price: string = 'price'
  reverse: boolean = false;
  caseInsensitive: boolean = false;
  sortedCollection: any[] | undefined;

  constructor(private route: Router,private orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.PRODUCTS, 'name');
    this.sortedCollection = orderPipe.transform(this.PRODUCTS, 'price');
  }

  ngOnInit(): void {
  }

  // This function redirects to the selected product [parameter - 'name' of the product]
  onselectProduct(product:any){
      this.route.navigate(['/prodDetails', product.name]);
  }

  // This function Sorts product list in desending order
  setDescending(value: string) {
    if (this.order === value) {
      this.reverse = true;
    }

    this.order = value;
  }

  // This function Sorts product list in ascending order
  setAscending(value: string) {
    if (this.order === value) {
      this.reverse = false;
    }

    this.order = value;
  }

  // This function Sorts product price in ascending order
  sortPrice(value: string) {
    if (this.order === value) {
      this.reverse = false;
    }

    this.order = value;
  }

  // This function Sorts product list by search on input field
  onSearch(event: any) {
    this.PRODUCTS = this.allProducts.filter((product: any) => {
      return product['name'].toLowerCase().includes(event.target.value.toLowerCase())
    })
  }





}
