import { Component, OnInit } from '@angular/core';
import { bounceInUp } from 'ng-animate';
import { trigger, transition, useAnimation } from '@angular/animations';

import * as AOS from 'aos';

@Component({
  selector: 'app-contatos-utilitarios',
  templateUrl: './contatos-utilitarios.component.html',
  styleUrls: ['./contatos-utilitarios.component.scss'],
})
export class ContatosUtilitariosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
