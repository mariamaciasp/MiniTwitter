import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TweetDto } from '../../dto/tweet.dto';
import { TweetsService } from '../../Services/tweets.service';

@Component({
  selector: 'app-crear-tweet',
  templateUrl: './crear-tweet.component.html',
  styleUrls: ['./crear-tweet.component.scss']
})
export class CrearTweetComponent implements OnInit {

  tweet: TweetDto;

  constructor(private servicioTweet: TweetsService, private router: Router) { 
    this.tweet = new TweetDto('', null,'');
  }
  
  ngOnInit(): void {
  }

  crearTweet() {
    this.servicioTweet.nuevoTweet(this.tweet).subscribe(
      data => {
        this.router.navigateByUrl('/tweets');
      }, error => {
        console.log(error);
      }
    );
  }

}
