import { Component } from '@angular/core';
import { AuthService } from 'src/core/services/auth.service';
import { CartService } from 'src/core/services/cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {


  isLogin: boolean = false;
  cartNumbers:number=0;


  constructor(
    private _AuthService: AuthService,
    private _CartService:CartService
    ) {


    this._AuthService.userData.subscribe((res) => {

      if (this._AuthService.userData.getValue()) {
        this.isLogin = true;
      }
      else {
        this.isLogin = false;
      }
    });
  }


  logOut(){
    this._AuthService.logOut();
  }

  ngOnInit(): void {
    this._CartService.numOfItems.subscribe({
    next:(res)=>{this.cartNumbers=res,
      console.log(this.cartNumbers)

    },
    error:(err)=> console.log(err)

  }),

  this._CartService.getUserCart().subscribe({
    next:(response)=>{
      this.cartNumbers = response.numOfCartItems
    }
  })
}


}
