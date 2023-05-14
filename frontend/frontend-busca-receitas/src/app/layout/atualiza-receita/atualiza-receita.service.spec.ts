import { TestBed } from '@angular/core/testing';

import { AtualizaReceitaService } from './atualiza-receita.service';

describe('AtualizaReceitaService', () => {
  let service: AtualizaReceitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtualizaReceitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
