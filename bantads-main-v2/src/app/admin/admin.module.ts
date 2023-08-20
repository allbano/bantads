import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelainicialadminComponent } from './telainicialadmin/telainicialadmin.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CadastrogerenteComponent } from './cadastrogerente/cadastrogerente.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TelainicialadminComponent,
    CadastrogerenteComponent
  ],
  imports: [
    CommonModule,
    NgModule,
    FontAwesomeModule,
    SharedModule
  ]
})
export class AdminModule { }
