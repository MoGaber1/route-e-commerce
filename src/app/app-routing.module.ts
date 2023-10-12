import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';




import { NotfoundComponent } from './notfound/notfound.component';
import { CheckoutComponent } from './checkout/checkout.component';



const routes: Routes = [


  {path:'', redirectTo:'home', pathMatch:'full'},

  {path:'signup',component:SignupComponent,title:'Signup'},
  {path:'login',component:LoginComponent,title:'Login'},
  {path:'home',component:MainComponent, title:'Home'},
  {path:'cart',component:CartComponent, title:'Cart'},
  {path:'products',component:ProductsComponent, title:'Products'},
  {path:'categories',component:CategoriesComponent, title:'Categories'},
  {path:'brands',component:BrandsComponent, title:'Brands'},
  {path:'checkout',component:CheckoutComponent, title:'checkout'},



  {path:'**',component:NotfoundComponent, title:'Page Not Found'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
