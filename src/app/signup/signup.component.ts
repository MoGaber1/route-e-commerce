import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/core/services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {


  constructor(
     private _AuthService:AuthService ,
    private _Router:Router,
    ){}

  isLoading:boolean= false;
  apiError:string = '';

  registerForm:FormGroup = new FormGroup ({
    name : new FormControl(null,[ Validators.required,Validators.minLength(3) ]),
    email : new FormControl(null, [Validators.required, Validators.email]),
    password : new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)]),
    rePassword : new FormControl(''),
    phone : new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),


    }
  , {validators : [this.passwordMatchValidator]}

    )


    handleRegister(registerForm:FormGroup){

      if (registerForm.valid){

        this.isLoading = true

        this._AuthService.register(registerForm?.value).subscribe({

          next:(response)=>{
            console.log(response);
            this.isLoading = false;
            this._Router.navigate(['/login'])

          },
          error:(err)=>{console.log(err);
            this.isLoading = false;
            this.apiError = err.error.message; }

        })
      }
    }


    passwordMatchValidator(control: AbstractControl) {
      const password = control.get('password')?.value;
      const rePassword = control.get('rePassword')?.value;


      if (!rePassword) {
        return { required: true };

      } else if (password !== rePassword) {
        return { passwordMismatch: true};

      }else {
        return null
      }
      }



}
