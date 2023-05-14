import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarReceitasComponent } from './gerenciar-receitas.component';

describe('GerenciarReceitasComponent', () => {
  let component: GerenciarReceitasComponent;
  let fixture: ComponentFixture<GerenciarReceitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerenciarReceitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciarReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
