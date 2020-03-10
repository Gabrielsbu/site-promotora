import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const MOCK_FORM_CONTATO = {
  teste: 'teste'
};
@Injectable({
  providedIn: 'root'
})
export class SejaParceiroHttpService {

  path = '';
  constructor(private _http: HttpClient) { }

  postFormContato(formContato: any): Observable<any> {
    //return this._http.post(`${this.path}`, formContato);
    const observable = new Observable(observer => {
      observer.next(MOCK_FORM_CONTATO);
    });
    return new Observable(observer => {
      observer.next(formContato);
    });
  }
}
