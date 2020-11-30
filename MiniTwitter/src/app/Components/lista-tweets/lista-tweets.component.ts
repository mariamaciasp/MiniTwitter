import { Component, OnInit, OnChanges} from '@angular/core';
import { TweetsService } from '../../Services/tweets.service';
import { ListaTweets } from '../../Models/listaTweets-response.interface'
import { Router } from '@angular/router';


@Component({
  selector: 'app-lista-tweets',
  templateUrl: './lista-tweets.component.html',
  styleUrls: ['./lista-tweets.component.scss']
})

export class ListaTweetsComponent implements OnInit {

  constructor(private servicioTweets: TweetsService, private router: Router) { }

  tweets: ListaTweets;

  ngOnInit(): void {
    this.tweets;
    this.listarTweets();

  }

  ngOnChanges(changes: any):void{
    this.listarTweets;
    this.tweets;
  }

  darLike(id: number) {
    this.servicioTweets.darLike(id).subscribe(resp => {
      console.log(resp);
    });;
    //this.tweets.likes.push();
    console.log("marcado favorito");
  }

  listarTweets(){
    this.servicioTweets.getTweets().subscribe((listaTweets: ListaTweets) => (this.tweets = listaTweets));

    /*})

    this.servicioUsuario.login(this.usuario).subscribe(data => {
      localStorage.setItem('token', data.token); // a saber para qué es esto
      this.router.navigateByUrl('/');
      console.log(data.token);
    });*/
      //(listaTweets: ListaTweets) => (this.tweets = listaTweets));
  }


}
