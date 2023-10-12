import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/core/services/cart.service';
CartService
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartDetails: any = null;

  constructor(private _CartService: CartService) {}
  ngOnInit(): void {
    this._CartService.getUserCart().subscribe({
      next: (response) => (this.cartDetails = response.data),
      error: (err) => console.log(err),
    });
  }




  removeItem(productId: string) {
    this._CartService.removeCartItem(productId).subscribe({
      next: (response) => {
        (this.cartDetails = response.data),
          this._CartService.numOfItems.next(response.numOfCartItems);
        console.log(response);

        if ((response.numOfCartItems = 0)) {
          this.cartDetails = null;
        }
      },
      error: (err) => console.log(err),
    });
  }




  clearCart() {
    this._CartService.clearCart().subscribe({
      next: (response) => {
        (this.cartDetails = response.data),
        console.log(response);
        this._CartService.numOfItems.next(response.numOfCartItems);
      },
      error: (err) => console.log(err),
    });
  }

  updateProductCount(productId: string, counter: number) {
    if (counter >= 1) {
      this._CartService.updateProductCount(productId, counter).subscribe({
        next: (response) => (this.cartDetails = response.data),
        error: (err) => console.log(err),
      });
    }
  }
}
