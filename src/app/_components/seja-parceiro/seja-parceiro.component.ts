import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-seja-parceiro',
  templateUrl: './seja-parceiro.component.html',
  styleUrls: ['./seja-parceiro.component.scss']
})
export class SejaParceiroComponent implements OnInit {
  closeResult: string;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }
}
