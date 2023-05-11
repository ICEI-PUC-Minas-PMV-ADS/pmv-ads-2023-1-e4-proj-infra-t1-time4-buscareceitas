import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasReceitasComponent } from './minhas-receitas.component';

describe('MinhasReceitasComponent', () => {
  let component: MinhasReceitasComponent;
  let fixture: ComponentFixture<MinhasReceitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinhasReceitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinhasReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
