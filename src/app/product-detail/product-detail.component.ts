import { Component, OnInit } from '@angular/core';
import * as data from '../data.json';
import { ActivatedRoute, Router } from '@angular/router';
import { reviewList } from '../Review.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent  implements OnInit {
  products: any = (data as any).default;
  selectedProduct! : any;
  name: any;
  selectedProductIndex:any;
  showdescription = false;
  showspec = false;
  showrev = true;
  reviewText = "";
  newReview: reviewList[] = []

  constructor(private activatedRoute: ActivatedRoute, private route: Router) {
  }

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

  onNext(){
    let name = this.products[this.selectedProductIndex + 1]
    // console.log(name)
    this.route.navigate(['/prodDetails', name.name])
    this.selectedProduct = name
    this.selectedProductIndex = this.selectedProductIndex+1
  }

  onPre(){
    let name = this.products[this.selectedProductIndex - 1]
    console.log(name)
    this.route.navigate(['/prodDetails', name.name])
    this.selectedProduct = name
    this.selectedProductIndex = this.selectedProductIndex-1
  }

  onShowdes(){
    this.showdescription = true;
    this.showspec = false;
    this.showrev = false;
  }

  onShowspec(){
    this.showrev = false;
    this.showdescription = false;
    this.showspec = true;
  }

  onShowrev(){
    this.showdescription = false;
    this.showspec = false;
    this.showrev = true;
  }



  onReviewrecived(data: reviewList){
    this.newReview.push(data)
  }




}
