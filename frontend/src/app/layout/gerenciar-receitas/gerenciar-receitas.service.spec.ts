import { TestBed } from '@angular/core/testing';

import { GerenciarReceitasService } from './gerenciar-receitas.service';

describe('GerenciarReceitasService', () => {
  let service: GerenciarReceitasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GerenciarReceitasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
