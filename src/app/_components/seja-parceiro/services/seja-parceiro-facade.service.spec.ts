import { TestBed } from '@angular/core/testing';

import { SejaParceiroFacadeService } from './seja-parceiro-facade.service';

describe('SejaParceiroFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SejaParceiroFacadeService = TestBed.get(SejaParceiroFacadeService);
    expect(service).toBeTruthy();
  });
});
