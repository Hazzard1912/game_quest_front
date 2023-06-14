import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MejoresValoradosComponent } from './mejores-valorados.component';

describe('MejoresValoradosComponent', () => {
  let component: MejoresValoradosComponent;
  let fixture: ComponentFixture<MejoresValoradosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MejoresValoradosComponent]
    });
    fixture = TestBed.createComponent(MejoresValoradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
