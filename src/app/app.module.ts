import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { BrandsComponent } from './brands/brands.component';




import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AddheaderInterceptor } from 'src/core/interceptors/addheader.interceptor';
import { CartComponent } from './cart/cart.component';
import { SearchPipe } from 'src/core/pipes/search.pipe';
import { CustomPricePipe } from 'src/core/pipes/custom-price.pipe';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesSliderComponent } from './categories-slider/categories-slider.component';
import { MainSliderComponent } from './main-slider/main-slider.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { WishlistComponent } from './wishlist/wishlist.component';







@NgModule({
  declarations: [
    AppComponent,
LoginComponent,
SignupComponent,
NavbarComponent,
MainComponent,
CartComponent,
FooterComponent,
ProductsComponent,
CategoriesComponent,
NotfoundComponent,
BrandsComponent,
CategoriesSliderComponent,
MainSliderComponent,
CheckoutComponent,
ProductDetailsComponent,
WishlistComponent,

SearchPipe,
CustomPricePipe,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
