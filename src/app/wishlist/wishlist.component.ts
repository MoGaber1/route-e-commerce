import { Component,OnInit } from '@angular/core';
import { WishlistService } from '../../core/services/wishlist.service';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

constructor (private _WishlistService:WishlistService){}


wishlistDetails:any[] = [];




  ngOnInit(): void {

    this._WishlistService.getUserWishList().subscribe({
      next:(response)=> {
        this.wishlistDetails = response.data
        console.log(response);
      },
      error:(err)=>{console.log(err);
      }
    })

  }

removeItem(productId:string){
  this._WishlistService.removeWishItem(productId).subscribe({
    next:(response)=> {
      console.log(response);
      this.wishlistDetails = response.data

    },
    error:(err)=>console.log(err)



  })
}


}
