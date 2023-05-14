import { TestBed } from '@angular/core/testing';

import { MeuPerfilService } from './meu-perfil.service';

describe('MeuPerfilService', () => {
  let service: MeuPerfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeuPerfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
