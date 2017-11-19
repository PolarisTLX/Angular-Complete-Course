import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})

export class ZippyComponent {

  // get this attribute title from app.component.html
  @Input('title') title: string;

  isExpanded: boolean = false;

  onClick() {
    this.isExpanded = !this.isExpanded;
  }

}
