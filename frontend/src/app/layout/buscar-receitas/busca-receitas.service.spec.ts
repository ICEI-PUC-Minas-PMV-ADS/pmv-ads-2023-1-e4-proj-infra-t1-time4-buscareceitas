import { TestBed } from '@angular/core/testing';

import { BuscaReceitasService } from './busca-receitas.service';

describe('BuscaReceitasService', () => {
  let service: BuscaReceitasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscaReceitasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
