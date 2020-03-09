import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { bounceInUp } from 'ng-animate';
import { trigger, transition, useAnimation } from '@angular/animations';


import * as AOS from 'aos';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  providers: [],
  styleUrls: ['./contato.component.scss'],
  animations: [
    trigger('bounceInUp', [transition('* => *', useAnimation(bounceInUp, {
      params: { timing: 3 }
    }))])
  ],
})
export class ContatoComponent implements OnInit {

  motivo: any;
  bounceInUp: any;

  dadosDoForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.dadosDoForm = this.gerarForm();
    AOS.init();
    
  }

  gerarForm(): FormGroup {
    return this._formBuilder.group({
      nomeCompleto: ['', [Validators.required]],
      email: ['', [Validators.required]],
      ddd: '',
      telefone: '',
      mensagem: ''

    });
  }

  postContato(){
    console.log('Dados: ', this.dadosDoForm)
  }

  limparForm(){
    this.dadosDoForm.reset();
  }

}
