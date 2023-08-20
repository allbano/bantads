import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { Login } from 'src/app/shared/models/login.model';

const LS_CHAVE: string = "usuarioCadastrado";

@Injectable({
  providedIn: 'root'
})
export class AutocadastroService {

  constructor() { }

  listarTodos(): Usuario[] {
    const usuarios = localStorage[LS_CHAVE];
    return usuarios ? JSON.parse(usuarios):[];
  }
  cadastro(usuario: Usuario): void{
    const pessoas = this.listarTodos();
    usuario.id = new Date().getTime();
    pessoas.push(usuario);
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }
}
