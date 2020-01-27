import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceInLeft } from 'ng-animate';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-primeiro-comp',
  templateUrl: './primeiro-comp.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./primeiro-comp.component.scss'],
  animations: [
    trigger('bounceInLeft', [transition('* => *', useAnimation(bounceInLeft))])
  ],
})
export class PrimeiroCompComponent implements OnInit {
  closeResult: string;
  bounceInLeft: any;
  numero: number;
  faCoffee = faCoffee;
  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }

  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }

  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  openScrollableContent(longContent) {
    this.modalService.open(longContent, { scrollable: true });
  }



}
