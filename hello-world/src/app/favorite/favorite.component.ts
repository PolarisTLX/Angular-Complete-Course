import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  // template: '',   // inline template form-1, for simple templates of <~5 lines of code
  templateUrl: './favorite.component.html',  // external template form-2
  // both inline and external can be present, but the last one is what is implemented
  styleUrls: ['./favorite.component.css'],  // external style .css
  styles: [                                 // inline style .css
    `
    .glyphicon {
      color: blue;
    }

    `
  ]
})
export class FavoriteComponent {
  @Input('isFavorite') isSelected: boolean;
  @Output('change') click = new EventEmitter();

  onClick() {
    this.isSelected = !this.isSelected;
    this.click.emit({ newValue: this.isSelected });
  }
}

// brought from app.component.ts
export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
