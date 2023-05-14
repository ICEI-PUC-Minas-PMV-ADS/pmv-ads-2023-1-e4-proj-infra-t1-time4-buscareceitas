import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaReceitaComponent } from './cria-receita.component';

describe('CriaReceitaComponent', () => {
  let component: CriaReceitaComponent;
  let fixture: ComponentFixture<CriaReceitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriaReceitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriaReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
