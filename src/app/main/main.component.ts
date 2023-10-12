import { Component, OnInit } from '@angular/core';
import { Product } from 'src/core/interfaces/product';
import { CartService } from 'src/core/services/cart.service';
import { ProductsService } from 'src/core/services/products.service';
import { WishlistService } from 'src/core/services/wishlist.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  products:Product[]=[];
  // wishlistDetails:string[]=[];
  searchTerm:string = '';

constructor (private _ProductsService:ProductsService,
  private _CartService:CartService, private _WishlistService:WishlistService){

}


addToCart(productId:any){

  this._CartService.addToCart(productId).subscribe({
    next:(response)=> {
      this._CartService.numOfItems.next(response.numOfCartItems),
      console.log(response)},
    error:(err)=> console.log(err)

  })
}

addToWishList(productId:any){
  this._WishlistService.addToWishList(productId).subscribe({
    next:(response)=>{console.log(response);
    },
    error:(err)=>{console.log(err);
    }
  })
}





ngOnInit(): void {

this._ProductsService.getProducts().subscribe({
  next : (response) => this.products = response.data
})

}



}
