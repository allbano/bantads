import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelainicialgerenteComponent } from './telainicialgerente.component';

describe('TelainicialgerenteComponent', () => {
  let component: TelainicialgerenteComponent;
  let fixture: ComponentFixture<TelainicialgerenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelainicialgerenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelainicialgerenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
