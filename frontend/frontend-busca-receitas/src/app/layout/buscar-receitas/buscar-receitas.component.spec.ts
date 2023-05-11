import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarReceitasComponent } from './buscar-receitas.component';

describe('BuscarReceitasComponent', () => {
  let component: BuscarReceitasComponent;
  let fixture: ComponentFixture<BuscarReceitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarReceitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
