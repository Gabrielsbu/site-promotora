import { TestBed } from '@angular/core/testing';

import { SejaParceiroHttpService } from './seja-parceiro-http.service';

describe('SejaParceiroHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SejaParceiroHttpService = TestBed.get(SejaParceiroHttpService);
    expect(service).toBeTruthy();
  });
});
