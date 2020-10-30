import { TestBed } from '@angular/core/testing';

import { PoketraderApiService } from './poketrader-api.service';

describe('PoketraderApiService', () => {
  let service: PoketraderApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoketraderApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
