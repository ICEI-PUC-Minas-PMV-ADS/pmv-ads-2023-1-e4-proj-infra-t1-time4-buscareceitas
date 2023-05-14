import { TestBed } from '@angular/core/testing';

import { CriaReceitaService } from './cria-receita.service';

describe('CriaReceitaService', () => {
  let service: CriaReceitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriaReceitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
