import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

import {debounceTime} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AngularStuding';
  scrollEvent = fromEvent(document, 'scroll');
  constructor() {}

  ngOnInit(): void {
    this.scrollEvent;
    this.scrollEvent.pipe(debounceTime(300)).subscribe(scroll => {
      console.log(scroll)
    })
  }

  teste(event) {
    console.log(event);
  }
}
