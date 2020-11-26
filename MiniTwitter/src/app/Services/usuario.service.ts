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
    'Content-Type':  'application/json'//,'Authorization': 'Bearer ' + token ¿para autorizaciones privadas?
  })
};

@Injectable({
  providedIn: "root"
})

export class UsuarioService {

  constructor(private http: HttpClient, private cookies: CookieService) {}

  login(usuario: LoginDto): Observable<LoginResponse> {
    const authURL = 'https://www.minitwitter.com:3001/apiv1/auth/login';
    return this.http.post<LoginResponse>(
      authURL,
      usuario,
      httpOptions
    );
  }//https://www.minitwitter.com:3001/api/auth/login'

  registro(usuarioRegistro: SingUpDto): Observable<SignUpResponse> {
    const authURLRegistro = 'https://www.minitwitter.com:3001/apiv1/auth/signup';
    return this.http.post<SignUpResponse>(
      authURLRegistro,
      usuarioRegistro,
      httpOptions
    );
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }

}
