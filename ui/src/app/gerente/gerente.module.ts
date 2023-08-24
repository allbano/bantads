import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelaInicialGerenteComponent } from './tela-inicial-gerente/tela-inicial-gerente.component';
import { ConsultarClientesComponent } from './consultar-clientes/consultar-clientes.component';



@NgModule({
  declarations: [
    TelaInicialGerenteComponent,
    ConsultarClientesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GerenteModule { }
