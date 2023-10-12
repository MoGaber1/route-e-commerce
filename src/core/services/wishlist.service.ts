import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private _HttpClient:HttpClient) { }



  headers: any = { token: localStorage.getItem('userToken') };


addToWishList(productIdReceiver:string):Observable<any>{
  return this._HttpClient.post(
    `https://ecommerce.routemisr.com/api/v1/wishlist`,
    { productId: productIdReceiver },
    {
      //configs
      headers: this.headers,
    }
  );
}

getUserWishList(): Observable<any> {
  return this._HttpClient.get(
    `https://ecommerce.routemisr.com/api/v1/wishlist`,
    {
      headers: this.headers,
    }
  );
}

  removeWishItem(productId: string): Observable<any> {
    return this._HttpClient.delete(
      `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
      {
        headers: this.headers,
      }
    );
  }

}
