import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceInLeft } from 'ng-animate';

@Component({
  selector: 'app-primeiro-comp',
  templateUrl: './primeiro-comp.component.html',
  styleUrls: ['./primeiro-comp.component.scss'],
  animations: [
    trigger('bounceInLeft', [transition('* => *', useAnimation(bounceInLeft))])
  ],
})
export class PrimeiroCompComponent implements OnInit {
  bounceInLeft: any;
  numero: number;
  faCoffee = faCoffee;
  constructor() { }

  ngOnInit() {
  }

}
