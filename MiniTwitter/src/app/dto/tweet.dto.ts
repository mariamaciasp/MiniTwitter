import { Like } from '../Models/like-response.interface';
import { Usuario } from '../Models/usuario-response.interface';

export class TweetDto{
  id:string;
  mensaje:string;
  likes:Like[];
  user:Usuario[];

  constructor(mensaje, likes, user) {
    this.mensaje=mensaje;
    this.likes=likes;
    this.user=user;
  }
}
