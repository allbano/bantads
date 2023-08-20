import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocadastroComponent } from './autocadastro.component';
import { Router, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { IConfig, NgxMaskModule } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};


@NgModule({
  declarations: [
    AutocadastroComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule, 
    NgxMaskModule.forRoot()

  ]
})
export class AutocadastroModule { }
