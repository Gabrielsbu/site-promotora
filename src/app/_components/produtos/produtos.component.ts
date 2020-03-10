import { Component, OnInit } from '@angular/core';
import { SejaParceiroFacadeService } from '../seja-parceiro/services/seja-parceiro-facade.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  constructor(private _sejaParceiroFacade: SejaParceiroFacadeService) { }

  ngOnInit() {
    console.log(this._sejaParceiroFacade.sejaParceiroContato);
  }

}
