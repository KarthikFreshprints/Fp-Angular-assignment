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
  PRODUCTS: any = (data as any).default;
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

  // this function forwards to the next product
  onNext(){
    let name = this.PRODUCTS[this.selectedProductIndex + 1]
    // console.log(name)
    this.route.navigate(['/prodDetails', name.name])
    this.selectedProduct = name
    this.selectedProductIndex = this.selectedProductIndex+1
  }

  // this function backwars to the previous product
  onPre(){
    let name = this.PRODUCTS[this.selectedProductIndex - 1]
    console.log(name)
    this.route.navigate(['/prodDetails', name.name])
    this.selectedProduct = name
    this.selectedProductIndex = this.selectedProductIndex-1
  }

  // toggle function to show description
  onShowdes(){
    this.showdescription = true;
    this.showspec = false;
    this.showrev = false;
  }

  // toggle function to show specification
  onShowspec(){
    this.showrev = false;
    this.showdescription = false;
    this.showspec = true;
  }

  // toggle function to show review
  onShowrev(){
    this.showdescription = false;
    this.showspec = false;
    this.showrev = true;
  }

  //recived data - passed from input component which pushes to an array of property
  onReviewrecived(data: reviewList){
    this.newReview.push(data)
  }

}
