import { FavoriteChangedEventArgs } from './favorite/favorite.component';
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

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('Favorite changed: ', eventArgs);
  }
}
