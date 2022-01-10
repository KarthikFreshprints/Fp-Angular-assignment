import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CheckOutComponent } from './check-out/check-out.component';

import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FilterPipe } from './filter.pipe';
import { OrderModule } from 'ngx-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { InputFormComponent } from './input-form/input-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailComponent,
    CheckOutComponent,
    FilterPipe,
    InputFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    OrderModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
