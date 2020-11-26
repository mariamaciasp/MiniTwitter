import { Usuario } from './usuario-response.interface';
import { Like } from './like-response.interface';

export interface ListaTweets {
  id: number;
  mensaje: string;
  likes: Like[];
  user: Usuario;
}




