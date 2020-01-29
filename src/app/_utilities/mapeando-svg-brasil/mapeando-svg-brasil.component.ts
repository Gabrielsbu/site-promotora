import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapeando-svg-brasil',
  templateUrl: './mapeando-svg-brasil.component.html',
  styleUrls: ['./mapeando-svg-brasil.component.scss']
})
export class MapeandoSvgBrasilComponent implements OnInit {
  states: any = document.getElementsByClassName('estado');

  constructor() { }

  ngOnInit() {
  }

  // getEstado() {
  //   for(let i = 0; i<this.states.length; i++){
  //     states[i].click = function(){
  //       this.getAttribute('name')
  //     }
  //   }
  // }

}
