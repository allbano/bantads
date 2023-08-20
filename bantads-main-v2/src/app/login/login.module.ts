import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { LoginService } from '../auth/services/login.service';
import { RouterModule } from '@angular/router';
import { AutocadastroService } from './services/autocadastro.service';
import { AutocadastroComponent } from "./autocadastro/AutocadastroComponent";
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';


export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
   AutocadastroComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgxMaskModule.forRoot(),
    SharedModule,
    FormsModule
  ],
  providers:[
    AutocadastroService
  ]
})
export class LoginModule { }
