import { Component, OnInit } from '@angular/core';
import { bounceInUp } from 'ng-animate';
import { trigger, transition, useAnimation } from '@angular/animations';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

import * as AOS from 'aos';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  providers: [NgbRatingConfig],
  styleUrls: ['./contato.component.scss'],
  animations: [
    trigger('bounceInUp', [transition('* => *', useAnimation(bounceInUp, {
      params: { timing: 3 }
    }))])
  ],
})
export class ContatoComponent implements OnInit {

  qtdEstrelas = 3;
  bounceInUp: any;

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
