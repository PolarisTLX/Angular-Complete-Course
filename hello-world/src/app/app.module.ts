
import { FavoriteComponent } from './favorite/favorite.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { TweetLikesComponent } from './tweet-likes/tweet-likes.component';


@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    PanelComponent,
    TweetLikesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
