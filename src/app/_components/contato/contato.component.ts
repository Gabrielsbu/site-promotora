import { Component, OnInit } from '@angular/core';
import { bounceInUp } from 'ng-animate';
import { trigger, transition, useAnimation } from '@angular/animations';

import * as AOS from 'aos';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  providers: [],
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

  constructor() {
    
   }

  ngOnInit() {
    AOS.init();
  }

  EnviarForm() {
    alert('sucess');
  }

}
