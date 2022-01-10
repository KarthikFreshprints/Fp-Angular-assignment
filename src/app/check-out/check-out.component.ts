import { Component, OnInit } from '@angular/core';
import * as data from '../data.json';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {
  PRODUCTS: any = (data as any).default;
  selectedProduct! : any;
  name: any;
  selectedProductIndex:any;

  constructor(private activatedRoute: ActivatedRoute ) { }

  // this loads the selected product with param 'name'
  ngOnInit(): void {
    this.loadProd()
  }

  // Function uses activated route and snapshot property to get the param of the single product
  loadProd(){
    this.name = this.activatedRoute.snapshot.params['name'];
    this.PRODUCTS.forEach((product: any, index: any) => {

       if (product.name === this.name) {
         this.selectedProduct = product,
         this.selectedProductIndex = index
       }
     })
  }

}
