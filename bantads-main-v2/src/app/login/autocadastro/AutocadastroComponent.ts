import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { AutocadastroService } from '../services/autocadastro.service';



@Component({
  selector: 'app-autocadastro',
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.css']
})
export class AutocadastroComponent implements OnInit {

  @ViewChild('formCadastro') formCadastro!: NgForm;
  usuario!: Usuario;

  constructor(
    private autocadastroService: AutocadastroService,
    private router: Router) { }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }
  cadastro(): void {
    if (this.formCadastro.form.valid) {
      this.autocadastroService.cadastro(this.usuario);
      this.router.navigate(["inicialcliente"]);
    }
  }

}
