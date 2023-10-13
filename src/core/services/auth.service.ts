import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _HttpClient: HttpClient, private _Router:Router) {

    if (localStorage.getItem('userToken')){
      this.decodeUserData()
    }


  }


  userData:BehaviorSubject<any> = new BehaviorSubject(null);



  decodeUserData(){
    let encodedToken= JSON.stringify(localStorage.getItem('userToken')) ;
    let decodedToken:any = jwtDecode(encodedToken);
    this.userData.next(decodedToken);
    console.log(this.userData);

  }



  register(userData: object): Observable<any> {
    return this._HttpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signup',
      userData
    );
  }



  login(userData: object): Observable<any> {
    return this._HttpClient.post(
      'https://ecommerce.routemisr.com/api/v1/auth/signin',
      userData
    );
  }

  logOut (){
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login'])
  }


  forgotPassword(userEmail:object):Observable<any>{
    return this._HttpClient.post ('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',userEmail)
  }

  resetCode (resetCode:object):Observable<any>{
    return this._HttpClient.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',resetCode)
  }

resetPass (userInfo:object):Observable<any>{
return this._HttpClient.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',userInfo)

}



}
