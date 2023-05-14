import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaReceitaComponent } from './atualiza-receita.component';

describe('AtualizaReceitaComponent', () => {
  let component: AtualizaReceitaComponent;
  let fixture: ComponentFixture<AtualizaReceitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizaReceitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizaReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
