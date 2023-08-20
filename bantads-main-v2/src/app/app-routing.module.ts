import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocadastroComponent } from "./login/autocadastro/AutocadastroComponent";
import { TelainicialComponent } from './cliente/telainicial/telainicial.component';
import { DepositoComponent } from './cliente/deposito/deposito.component';
import { SaqueComponent } from './cliente/saque/saque.component';
import { TransferirComponent } from './cliente/transferir/transferir.component';
import { ExtratoComponent } from './cliente/extrato/extrato.component';
import { LoginRoutes } from './auth/auth-routing.module';
import { AuthGuard } from './auth/auth.guard';
import { TelainicialgerenteComponent } from './gerente/telainicialgerente/telainicialgerente.component';
import { TelainicialadminComponent } from './admin/telainicialadmin/telainicialadmin.component';
import { TodosclientesComponent } from './gerente/todosclientes/todosclientes.component';
import { ClientedetalhesComponent } from './gerente/clientedetalhes/clientedetalhes.component';
import { BuscaclienteComponent } from './gerente/buscacliente/buscacliente.component';
import { TopclientesComponent } from './gerente/topclientes/topclientes.component';
import { CadastrogerenteComponent } from './admin/cadastrogerente/cadastrogerente.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path:'cadastro', component: AutocadastroComponent},
  {path:'inicialcliente', component: TelainicialComponent, canActivate:[AuthGuard], data:{role: 'CLIENTE'}},
  {path:'deposito', component: DepositoComponent, canActivate:[AuthGuard], data:{role: 'CLIENTE'}},
  {path:'saque', component: SaqueComponent, canActivate:[AuthGuard], data:{role: 'CLIENTE'}},
  {path:'transferir', component: TransferirComponent, canActivate:[AuthGuard], data:{role: 'CLIENTE'}},
  {path:'extrato', component: ExtratoComponent, canActivate:[AuthGuard], data:{role: 'CLIENTE'}},
  {path: 'inicialgerente', component: TelainicialgerenteComponent, canActivate:[AuthGuard], data:{role: 'GERENTE'}},
  {path: 'inicialadmin', component: TelainicialadminComponent, canActivate:[AuthGuard], data:{role: 'ADMIN'}},
  {path: 'gerenteclientes', component: TodosclientesComponent, canActivate:[AuthGuard], data:{role: 'GERENTE'}},
  {path: 'detalhecliente', component: ClientedetalhesComponent, canActivate:[AuthGuard], data:{role: 'GERENTE'}},
  {path: 'buscacliente', component: BuscaclienteComponent, canActivate:[AuthGuard], data:{role: 'GERENTE'}},
  {path: 'topclientes', component: TopclientesComponent, canActivate:[AuthGuard], data:{role: 'GERENTE'}},
  {path: 'cadastrogerente', component: CadastrogerenteComponent, canActivate:[AuthGuard], data:{role: 'ADMIN'}},
  ...LoginRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
