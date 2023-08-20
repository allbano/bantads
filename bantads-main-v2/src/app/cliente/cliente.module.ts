import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelainicialComponent } from './telainicial/telainicial.component';
import { DepositoComponent } from './deposito/deposito.component';
import { SaqueComponent } from './saque/saque.component';
import { TransferirComponent } from './transferir/transferir.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TelainicialComponent,
    DepositoComponent,
    SaqueComponent,
    TransferirComponent,
    ExtratoComponent,
  ],
  imports: [
    CommonModule,
    NgModule,
    FontAwesomeModule,
    BrowserModule,
    FormsModule,
    SharedModule,
  ]
})
export class ClienteModule { }
