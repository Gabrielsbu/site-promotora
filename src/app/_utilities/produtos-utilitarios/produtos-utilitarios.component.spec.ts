import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosUtilitariosComponent } from './produtos-utilitarios.component';

describe('ProdutosUtilitariosComponent', () => {
  let component: ProdutosUtilitariosComponent;
  let fixture: ComponentFixture<ProdutosUtilitariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosUtilitariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosUtilitariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
