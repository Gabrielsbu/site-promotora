import { Component, OnInit } from '@angular/core';
import { fadeOutRight } from 'ng-animate';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss'],
  animations: [
    trigger('fadeOutRight', [transition('* => *', useAnimation(fadeOutRight, {
      params: { timing: 4, delay: 1 }
    }))])
  ],
})
export class ContatoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  EnviarForm() {
    alert('sucess');
  }
}
