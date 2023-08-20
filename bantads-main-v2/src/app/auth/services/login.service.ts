import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { Login } from 'src/app/shared/models/login.model';

const LS_CHAVE: string = "usuarioLogado";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public get usuarioLogado(): Usuario{
    let usu = localStorage[LS_CHAVE];
    return (usu ? JSON.parse(localStorage[LS_CHAVE]) :null);
  }
  public set usuarioLogado(usuario: Usuario){
    localStorage[LS_CHAVE] = JSON.stringify(usuario);
  }
  logout(){
    delete localStorage[LS_CHAVE];
  }
  login(login: Login): Observable<Usuario | null> {
    let usu = new Usuario();

    if(login.email==login.senha){
      if(login.email=="admin"){
        usu = new Usuario(1,"jao",1200,"rua pedro golvea","cajuru","curitiba","parana","00124574865","41 30333333",login.email,login.senha,"ADMIN");
      }
      else if (login.email=="gerente"){
        usu = new Usuario(1,"jao",1200,"rua pedro golvea","cajuru","curitiba","parana","00124574865","41 30333333",login.email,login.senha,"GERENTE");
        }
        else if(login.email=="cliente"){
          usu = new Usuario(1,"jao",1200,"rua pedro golvea","cajuru","curitiba","parana","00124574865","41 30333333",login.email,login.senha,"CLIENTE");
        }
        return of(usu);
      }
      else{
        return of(null);
      }
    }
  }

