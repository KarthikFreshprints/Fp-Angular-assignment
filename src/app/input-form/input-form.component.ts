import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { reviewList } from '../Review.model';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  // Ng model declaations
  title="";
  reviews="";
  rating="";

  constructor() { }

  // this property used to open & close review dialog
  showCard = false;

  // Custom event using output and eventEmitter to emit data
  @Output() Review = new EventEmitter<any>();

  // Reactive Form
  reviewForm! : FormGroup;

  ngOnInit(): void {
    // Form validation
    this.reviewForm = new FormGroup({
      'title' : new FormControl(null, Validators.required),
      'body' : new FormControl(null, Validators.required),
      'rate' : new FormControl(null, Validators.required)
    })
  }

  // This function submits the form and passes data using emit function
  onReview(){
    const review:reviewList  = {
      title : this.title,
      body : this.reviews,
      rate: this.rating
    }

    this.Review.emit(review)
    this.reviewForm.reset();
  }

  // this Opens the review card
  showInput(){
    this.showCard = true;
  }

  // this Closes the review card
  onClose(){
    this.showCard = false;
  }

}
