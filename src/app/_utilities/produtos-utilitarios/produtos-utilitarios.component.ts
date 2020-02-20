import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-produtos-utilitarios',
  templateUrl: './produtos-utilitarios.component.html',
  styleUrls: ['./produtos-utilitarios.component.scss']
})
export class ProdutosUtilitariosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
