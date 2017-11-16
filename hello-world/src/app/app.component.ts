import { TweetLikesComponent } from './tweet-likes/tweet-likes.component';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  //this word "tweet" is needed WITHIN the element that is in app.component.html
  tweet = {
    title: 'Title',
    isFavorite: false,
    likesCount: 41
  };
}
