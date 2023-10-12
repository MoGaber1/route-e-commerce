import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/core/services/cart.service';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private _CartService:CartService,
    private _ActivatedRoute:ActivatedRoute
    ){}


shippingAddress:FormGroup = new FormGroup({
  details:new FormControl(null),
  phone:new FormControl(null),
  city:new FormControl(null),
})

navigateToPage (url:string){
  window.location.href= url
}


handleSubmit(shippingAddress:FormGroup){
console.log(shippingAddress.value);
this._CartService.onlinePayment(shippingAddress.value,this.cartId ).subscribe({
  next:(response)=>{
    this.navigateToPage(response.session.url)
  }
})

}

cartId:string | null = '';

ngOnInit(): void {
  this._ActivatedRoute.paramMap.subscribe({
    next:(params) => {
      this.cartId = params.get('id')
    }
  })

}

}
