import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConhecaF5Component } from './conheca-f5.component';

describe('ConhecaF5Component', () => {
  let component: ConhecaF5Component;
  let fixture: ComponentFixture<ConhecaF5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConhecaF5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConhecaF5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
