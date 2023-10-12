import { Component, OnInit } from '@angular/core';
import { Product } from 'src/core/interfaces/product';
import { CartService } from 'src/core/services/cart.service';
import { ProductsService } from 'src/core/services/products.service';
// import { ProductsService } from '../Services/products.service';
// import { Product } from '../interfaces/product';
// import { CartService } from '../Services/cart.service';
// import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[]=[];
  searchTerm:string = '';



constructor (private _ProductsService:ProductsService,
  private _CartService:CartService,

  ){}



  addToCart(productId:any){

    this._CartService.addToCart(productId).subscribe({
      next:(response)=> {
        this._CartService.numOfItems.next(response.numOfCartItems),
   
        console.log(response)},
      error:(err)=> console.log(err)

    })
  }



  ngOnInit(): void {

    this._ProductsService.getProducts().subscribe({
      next : (response) => this.products = response.data
    })

    }


}


