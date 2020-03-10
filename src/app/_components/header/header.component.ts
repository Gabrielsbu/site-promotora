import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounceInDown } from 'ng-animate';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as AOS from 'aos';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('bounceInDown', [transition('* => *', useAnimation(bounceInDown, {
      params: { timing: 4, delay: 1 }
    }))])
  ],
})
export class HeaderComponent implements OnInit {
  closeResult: string;
  bounceInDown: any;
  faBars = faBars;
  public isCollapsed = true;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    AOS.init();

  }

  openXl(content) {
    this.modalService.open(content, { size: 'xl' });
  }

  modalHasClosed(event) {
    this.isCollapsed = !this.isCollapsed;
  }

  teste(event) {
    console.log(event);
  }
}
