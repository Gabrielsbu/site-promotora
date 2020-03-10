import { TestBed } from '@angular/core/testing';

import { SejaParceiroStoreService } from './seja-parceiro-store.service';

describe('SejaParceiroStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SejaParceiroStoreService = TestBed.get(SejaParceiroStoreService);
    expect(service).toBeTruthy();
  });
});
