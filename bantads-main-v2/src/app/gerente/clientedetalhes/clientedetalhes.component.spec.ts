import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientedetalhesComponent } from './clientedetalhes.component';

describe('ClientedetalhesComponent', () => {
  let component: ClientedetalhesComponent;
  let fixture: ComponentFixture<ClientedetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientedetalhesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientedetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
