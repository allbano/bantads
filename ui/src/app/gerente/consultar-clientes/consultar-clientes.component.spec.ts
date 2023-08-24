import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarClientesComponent } from './consultar-clientes.component';

describe('ConsultarClientesComponent', () => {
  let component: ConsultarClientesComponent;
  let fixture: ComponentFixture<ConsultarClientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultarClientesComponent]
    });
    fixture = TestBed.createComponent(ConsultarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
