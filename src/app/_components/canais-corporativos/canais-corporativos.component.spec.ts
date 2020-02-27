import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanaisCorporativosComponent } from './canais-corporativos.component';

describe('CanaisCorporativosComponent', () => {
  let component: CanaisCorporativosComponent;
  let fixture: ComponentFixture<CanaisCorporativosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanaisCorporativosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanaisCorporativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
