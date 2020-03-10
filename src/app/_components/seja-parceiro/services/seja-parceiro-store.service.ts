import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SejaParceiroStoreService {
  private _sejaParceiroContato: BehaviorSubject<any> = new BehaviorSubject(null);
  readonly sejaParceiroContato$ = this._sejaParceiroContato.asObservable();

  constructor() { }

  get sejaParceiroContato(): any {
    return this._sejaParceiroContato.value;
  }
  set sejaParceiroContato(newSejaParceiro: any) {
    this._sejaParceiroContato.next(newSejaParceiro);
  }
}
