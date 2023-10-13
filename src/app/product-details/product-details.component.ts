import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/core/services/cart.service';
import { ProductsService } from 'src/core/services/products.service';




@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute,
    private _ProductsService:ProductsService,
    private _CartService:CartService,
    ){

  }

  productId!:string|null;
  productDetails:any

ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe((params)=>{
// params.get('id');
this.productId = params.get('id');
  });

  this._ProductsService.getProductsDetails(this.productId).subscribe({
    next:(response)=> this.productDetails = response.data
  })
console.log();

}


addToCart(productId:any){

  this._CartService.addToCart(productId).subscribe({
    next:(response)=> {
      this._CartService.numOfItems.next(response.numOfCartItems),
      console.log(response)},
    error:(err)=> console.log(err)

  })
}


customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: false,
  navSpeed: 700,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },

  },
  nav: true
}



}
