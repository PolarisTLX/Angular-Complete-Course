// import { CoursesService } from './courses.service';

import { Component } from '@angular/core';
import {TitleCasePipe} from './summary.pipe';

// declerator function:
@Component({

  selector: 'isFavorite',

  template: `
    <input [(ngModel)]="usermessage" (keydown)="onKeyPress()" />
    <br/>
    {{ text | titleCase }}
  `
  // <h2 id="Proper"></h2>
  })

  export class CoursesComponent {
    usermessage: string;
    text = '';

    onKeyPress() {
      console.log(this.usermessage);
      // document.getElementById("Proper").innerHTML = this.usermessage;
      this.text = this.usermessage;
    }
  }
