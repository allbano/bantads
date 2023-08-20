import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelainicialgerenteComponent } from './telainicialgerente/telainicialgerente.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TodosclientesComponent } from './todosclientes/todosclientes.component';
import { ClientedetalhesComponent } from './clientedetalhes/clientedetalhes.component';
import { BuscaclienteComponent } from './buscacliente/buscacliente.component';
import { TopclientesComponent } from './topclientes/topclientes.component';



@NgModule({
  declarations: [
    TelainicialgerenteComponent,
    TodosclientesComponent,
    ClientedetalhesComponent,
    BuscaclienteComponent,
    TopclientesComponent
  ],
  imports: [
    CommonModule,
    NgModule,
    FontAwesomeModule
  ]
})
export class GerenteModule { }
