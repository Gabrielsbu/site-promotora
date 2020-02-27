import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-funcionalidades',
  templateUrl: './funcionalidades.component.html',
  styleUrls: ['./funcionalidades.component.scss']
})
export class FuncionalidadesComponent implements OnInit {
  active = 1;
  closeResult: string;
  bounceInLeft: any;
  numero: number;

  @Output() modalClosed: EventEmitter<any> = new EventEmitter();
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }

  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }

  testModalClosed(event) {
    this.modalClosed.emit('teste2');
  }

}
