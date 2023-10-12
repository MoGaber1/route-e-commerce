import { Component, OnInit } from '@angular/core';

import {Categories} from '../../core/interfaces/categories'
import { ProductsService } from 'src/core/services/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

categoriesList: Categories[]=[]

  constructor (private _ProductsService:ProductsService){}

ngOnInit(): void {

  this._ProductsService.getCategories().subscribe({
    next:(response)=>{
    this.categoriesList = response.data;
    console.log(this.categoriesList);


  }
  })
  // this.getCategories()
}

// getCategories(){
//   this._ProductsService.getCategories().subscribe({
//     next:(res)=> {
//       this.categoriesList = res.data
//       ;console.log(this.categoriesList);
//     }
//   })
// }



}
