import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginResponse } from '../models/login-response.interface';
import { LoginDto } from '../dto/login.dto';
import { CookieService } from "ngx-cookie-service";
import { SingUpDto } from '../dto/signUp.dto';
import { SignUpResponse } from '../Models/signUp-response.interface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: "root"
})

export class TweetsService {

  constructor(private http: HttpClient) {}


  mostrarTweets(){

  }

  /*registro(usuarioRegistro: SingUpDto): Observable<SignUpResponse> {
    const authURLRegistro = 'https://www.minitwitter.com:3001/apiv1/auth/signup';
    return this.http.post<SignUpResponse>(
      authURLRegistro,
      usuarioRegistro,
      httpOptions
    );
  }*/



}
