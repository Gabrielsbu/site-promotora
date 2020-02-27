import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {
  
  @Input() modal;
  active = 1;
  @Output() modalClosed: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  teste(event) {
    this.modalClosed.emit('teste');
    this.modal.dismiss('teste');
  }

}
