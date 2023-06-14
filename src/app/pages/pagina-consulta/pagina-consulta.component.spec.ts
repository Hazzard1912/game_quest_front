import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaConsultaComponent } from './pagina-consulta.component';

describe('PaginaConsultaComponent', () => {
  let component: PaginaConsultaComponent;
  let fixture: ComponentFixture<PaginaConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PaginaConsultaComponent]
    });
    fixture = TestBed.createComponent(PaginaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
