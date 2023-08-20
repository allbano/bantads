import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelainicialadminComponent } from './telainicialadmin.component';

describe('TelainicialadminComponent', () => {
  let component: TelainicialadminComponent;
  let fixture: ComponentFixture<TelainicialadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelainicialadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelainicialadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
