import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaclienteComponent } from './buscacliente.component';

describe('BuscaclienteComponent', () => {
  let component: BuscaclienteComponent;
  let fixture: ComponentFixture<BuscaclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaclienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
