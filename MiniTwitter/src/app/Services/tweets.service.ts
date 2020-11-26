import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ListaTweets } from '../Models/listaTweets-response.interface';

/*import { from, Observable } from "rxjs";
import { ListaTweets } from '../models/listaTweets-response.interface';
import { Like } from '../models/like-response.interface';
import { Usuario } from '../models/usuario-response.interface';*/

const token = localStorage.getItem('token');
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer ' + token
  })
};

@Injectable({
  providedIn: "root"
})

export class TweetsService {

  constructor(private http: HttpClient) {}


  getTweets(): Observable<ListaTweets>{
    const authURL = 'https://www.minitwitter.com:3001/apiv1/tweets/all';
    return this.http.get<ListaTweets>(
      authURL,
      httpOptions
    );
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
