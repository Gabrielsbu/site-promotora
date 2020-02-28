import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-conheca-f5',
  templateUrl: './conheca-f5.component.html',
  styleUrls: ['./conheca-f5.component.scss']
})
export class ConhecaF5Component implements OnInit {

  constructor() { }

  ngOnInit() {
    AOS.init();
  }

}
