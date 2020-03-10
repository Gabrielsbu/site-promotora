import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SejaParceiroHttpService } from './services/seja-parceiro-http.service';
import { SejaParceiroFacadeService } from './services/seja-parceiro-facade.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-seja-parceiro',
  templateUrl: './seja-parceiro.component.html',
  styleUrls: ['./seja-parceiro.component.scss']
})
export class SejaParceiroComponent implements OnInit, OnDestroy {

  dadosDoForm: FormGroup;

  subscription: Subscription;


  constructor(
    private _formBuilder: FormBuilder,
    private _sejaParceiroFacade: SejaParceiroFacadeService
  ) { }

  ngOnInit() {
    this.dadosDoForm = this.gerarDadosForm();
    this.subscription = this._sejaParceiroFacade.sejaParceiroContato$.subscribe(valoresGuardados => {
      console.log(valoresGuardados);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  gerarDadosForm(): FormGroup {
    return this._formBuilder.group({
      nomeCompleto: '',
      cpf: '',
      email: '',
      endereco: '',
      telefone: '',
      estado: '',
      cidade: '',
      cep: '',
      mensagem: ''

    });
  }

  postDados(){
    this._sejaParceiroFacade.enviarFormularioContato(this.dadosDoForm.value);
    this.limpar()
  }

  limpar(){
    this.dadosDoForm.reset();
  }

}
