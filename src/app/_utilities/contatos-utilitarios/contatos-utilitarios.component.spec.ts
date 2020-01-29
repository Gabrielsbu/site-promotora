import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosUtilitariosComponent } from './contatos-utilitarios.component';

describe('ContatosUtilitariosComponent', () => {
  let component: ContatosUtilitariosComponent;
  let fixture: ComponentFixture<ContatosUtilitariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatosUtilitariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatosUtilitariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
