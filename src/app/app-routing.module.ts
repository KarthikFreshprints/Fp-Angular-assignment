import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'checkout', component: CheckOutComponent},
  {path: 'prodDetails/:name', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
