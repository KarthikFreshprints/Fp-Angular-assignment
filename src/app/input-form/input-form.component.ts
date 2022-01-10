import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { reviewList } from '../Review.model';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  title="";
  reviews="";
  rating="";
  constructor() { }
  Show = false;

  @Output() Review = new EventEmitter<any>();

    // Reactive Form
    reviewForm! : FormGroup;

    // get method for controls
    get g(){
      return this.reviewForm.controls
    }

  ngOnInit(): void {
    this.reviewForm = new FormGroup({
      'title' : new FormControl(null, Validators.required),
      'body' : new FormControl(null, Validators.required),
      'rate' : new FormControl(null, Validators.required)
    })
  }

  onReview(){
    const review:reviewList  = {
      title : this.title,
      body : this.reviews,
      rate: this.rating
    }

    this.Review.emit(review)
    this.reviewForm.reset();
  }

  showInput(){
    this.Show = true;
  }

  onClose(){
    this.Show = false;
  }

}
