import { Component, OnInit } from '@angular/core';
import * as data from '../data.json';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {
  products: any = (data as any).default;
  selectedProduct! : any;
  name: any;
  selectedProductIndex:any;
  constructor(private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.loadProd()
  }

  loadProd(){
    this.name = this.activatedRoute.snapshot.params['name'];
    this.products.forEach((product: any, index: any) => {

       if (product.name === this.name) {
         this.selectedProduct = product,
         this.selectedProductIndex = index
       }
     })
    //  console.log(this.selectedProduct)
  }

}
