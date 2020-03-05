import { Component, OnInit } from '@angular/core';
import { bounceInUp } from 'ng-animate';
import { trigger, transition, useAnimation } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('bounceInUp', [transition('* => *', useAnimation(bounceInUp, {
      params: { timing: 4 }
    }))])
  ],
})
export class HomeComponent implements OnInit {
  bounceInUp: any;
  constructor() { }

  ngOnInit() {
  }

}
