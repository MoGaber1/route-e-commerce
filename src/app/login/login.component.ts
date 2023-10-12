import { Component } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _AuthService:AuthService, private _Router:Router) {

    if (localStorage.getItem('userToken')!==null){
      _Router.navigate(['/home'])
    }
      }


      isLoading:boolean= false;
      apiError:string = '';



      loginForm:FormGroup = new FormGroup ({

        email : new FormControl(null, [Validators.required, Validators.email]),
        password : new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)]),

        })


        handleLogin(loginForm:FormGroup){

          if (loginForm.valid){

            this.isLoading = true

            this._AuthService.login(loginForm?.value).subscribe({

              next:(response)=>{
                console.log(response);

                localStorage.setItem('userToken',response.token)
                this._AuthService.decodeUserData();

                this.isLoading = false;
                this._Router.navigate(['/home'])

              },
              error:(err)=>{console.log(err);
                this.isLoading = false;
                this.apiError = err.error.message;


              }

            })


          }


        }


}
