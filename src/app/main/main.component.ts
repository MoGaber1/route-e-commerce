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
  wishlistData:string[]=[];
  searchTerm:string = '';



constructor (private _ProductsService:ProductsService,
  private _CartService:CartService, private _WishlistService:WishlistService){

}

  ngOnInit(): void {
  this._ProductsService.getProducts().subscribe({
    next : (response) => this.products = response.data
  })


  this._WishlistService.getUserWishList().subscribe({
    next:(response) =>{

      const newWishData = response.data.map((item:any)=>item._id)
      console.log('newData',newWishData);
       this.wishlistData = newWishData 

    }
  })

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
      this.wishlistData = response.data

    },
    error:(err)=>{console.log(err);
    }
  })
}

removeWishItem(productId:any){
  this._WishlistService.removeWishItem(productId).subscribe({
    next:(response)=> {
      console.log(response);
      this.wishlistData = response.data

    },
    error:(err)=>console.log(err)



  })
}









}
