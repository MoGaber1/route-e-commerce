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
import { ProductDetailsComponent } from './product-details/product-details.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { authGuard } from 'src/core/auth.guard';




const routes: Routes = [


  {path:'', redirectTo:'home', pathMatch:'full'},

  {path:'signup',component:SignupComponent,title:'Signup'},
  {path:'login',component:LoginComponent,title:'Login'},
  {path:'forgotPassword',component:ForgotpasswordComponent,title:'Forgot Password'},
  {path:'home',canActivate:[authGuard] ,component:MainComponent, title:'Home'},
  {path:'cart',canActivate:[authGuard] ,component:CartComponent, title:'Cart'},
  {path:'wishList',canActivate:[authGuard] ,component:WishlistComponent, title:'Wishlist'},
  {path:'products',canActivate:[authGuard] ,component:ProductsComponent, title:'Products'},
  {path:'categories',canActivate:[authGuard] ,component:CategoriesComponent, title:'Categories'},
  {path:'brands',canActivate:[authGuard] ,component:BrandsComponent, title:'Brands'},
  {path:'checkout/:id',canActivate:[authGuard] ,component:CheckoutComponent, title:'Checkout'},
  {path:'productDetails/:id',canActivate:[authGuard] ,component:ProductDetailsComponent, title:''},



  {path:'**',component:NotfoundComponent, title:'Page Not Found'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
