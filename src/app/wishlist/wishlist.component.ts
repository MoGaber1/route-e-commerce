import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../../core/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  constructor(private _WishlistService: WishlistService) {}

  wishlistDetails: any[] = [];
  products: any[] = [];

  ngOnInit(): void {
    this._WishlistService.getUserWishList().subscribe({
      next: (response) => {
        this.wishlistDetails = response.data;
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  removeItem(productId: string) {
    this._WishlistService.removeWishItem(productId).subscribe({
      next: () => {
        this._WishlistService.getUserWishList().subscribe({
          next: (response) => {
            this.wishlistDetails = response.data;
            console.log(response);
          },
          error: (err) => {
            console.log(err);
          },
        });
        // const newProData = this.products.filter(
        //   (item:any)=> this.wishlistDetails.includes(item._id)
        // )

        // this.products = newProData
      },
      error: (err) => console.log(err),
    });
  }
}
