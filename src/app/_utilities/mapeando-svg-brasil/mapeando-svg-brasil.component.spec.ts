import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapeandoSvgBrasilComponent } from './mapeando-svg-brasil.component';

describe('MapeandoSvgBrasilComponent', () => {
  let component: MapeandoSvgBrasilComponent;
  let fixture: ComponentFixture<MapeandoSvgBrasilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapeandoSvgBrasilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapeandoSvgBrasilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
