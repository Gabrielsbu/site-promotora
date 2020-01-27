import { Component, OnInit } from '@angular/core';
import { bounceInRight } from 'ng-animate';
import { trigger, transition, useAnimation } from '@angular/animations';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

import * as AOS from 'aos';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  providers: [NgbRatingConfig],
  styleUrls: ['./contato.component.scss'],
  animations: [
    trigger('bounceInRight', [transition('* => *', useAnimation(bounceInRight, {
      params: { timing: 10 }
    }))])
  ],
})
export class ContatoComponent implements OnInit {
  currentRate = 3;
  bounceInRight: any;
  constructor(config: NgbRatingConfig) {
    config.max = 5;
    config.resettable = true;
   }

  ngOnInit() {
    AOS.init();
  }

  EnviarForm() {
    alert('sucess');
  }

}
