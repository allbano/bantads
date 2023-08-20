import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosclientesComponent } from './todosclientes.component';

describe('TodosclientesComponent', () => {
  let component: TodosclientesComponent;
  let fixture: ComponentFixture<TodosclientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosclientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
