// this file is in the wrong location, one folder too deep, just to preserve the lesson as a whole

// import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

// interface FavoriteChangedEventArgs {
//   newValue: boolean;
// }

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  post = {
    title: 'Title',
    isFavorite: true
  };

  // onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
  //   console.log('Favorite changed: ', eventArgs);
  // }
}
