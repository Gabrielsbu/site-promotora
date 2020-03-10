import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { SejaParceiroStoreService } from './seja-parceiro-store.service';
import { SejaParceiroHttpService } from './seja-parceiro-http.service';

@Injectable({
  providedIn: 'root'
})
export class SejaParceiroFacadeService {

  constructor(
    private sejaParceiroStore: SejaParceiroStoreService,
    private sejaParceiroHttp: SejaParceiroHttpService
    ) { }

  get sejaParceiroContato(): any {
    return this.sejaParceiroStore.sejaParceiroContato;
  }
  get sejaParceiroContato$(): Observable<any> {
    return this.sejaParceiroStore.sejaParceiroContato$
  }

  enviarFormularioContato(formularioContato) {
    this.sejaParceiroHttp.postFormContato(formularioContato).subscribe(retorno => {
      this.sejaParceiroStore.sejaParceiroContato = retorno;
    });
  }

}
