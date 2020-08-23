import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/models/negocio/perfil';
import { PerfilService } from 'src/app/services/perfil.service';
import { MensagemComponent } from '../mensagem/mensagem.component';
import { TipoMensagem } from 'src/app/models/enum/tipoMensagem';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfilModal: Perfil;

  constructor(
    private service: PerfilService,
    private mensagem: MensagemComponent

  ) { }

  listaItens: any[];
  perfil: Perfil;
  perfilDescricao: any;
  perfilDescricaoModal: any;
  modalEditar: boolean;

  ngOnInit() {
    this.listaItens = [];
    this.modalEditar = false;
    this.pesquisar();
  }


  pesquisar(){
    this.service.listar()
    .subscribe(response =>{
      this.listaItens = response;
    })
  }

  adicionar(){

    this.perfil = new Perfil();
    this.perfil.nome = this.perfilDescricao;
    this.perfil.ativo = true;

    this.service.incluir(this.perfil)
    .then(response=>{
      this.listaItens = response;
      this.mensagem.showTopCenter('Perfil cadastrado com sucesso', TipoMensagem.sucesso);
      this.pesquisar();
      this.perfilDescricao = null;
    })
  }


  controlaModal(id){

    this.perfilModal = new Perfil();

      this.service.buscarId(id)
      .then(response=>{
        this.perfilModal = response;
        this.perfilDescricaoModal = response.nome;
        this.modalEditar = true;
      })
  }

  editar(){
    this.perfil = new Perfil();
    this.perfil.id = this.perfilModal.id;
    this.perfil.nome = this.perfilDescricaoModal;
    this.perfil.ativo = true;

    this.service.alterar(this.perfil)
    .then(response=>{
      this.listaItens = response;
      this.mensagem.showTopCenter('Perfil alterado com sucesso', TipoMensagem.sucesso);
      this.pesquisar();
     this.modalEditar = false;
    })
  }
  excluir(perfil){

    this.perfil = new Perfil();
    this.perfil = perfil;
    this.perfil.ativo = false;
    this.service.alterar(this.perfil)
    .then(response=>{
      this.listaItens = response;
      this.mensagem.showTopCenter('Perfil excluído com sucesso', TipoMensagem.sucesso);
      this.pesquisar();
    })


  }
}
