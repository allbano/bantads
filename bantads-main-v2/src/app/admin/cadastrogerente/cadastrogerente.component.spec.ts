import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrogerenteComponent } from './cadastrogerente.component';

describe('CadastrogerenteComponent', () => {
  let component: CadastrogerenteComponent;
  let fixture: ComponentFixture<CadastrogerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrogerenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrogerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
