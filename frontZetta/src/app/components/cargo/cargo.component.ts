import { Component, OnInit } from '@angular/core';
import { CargoService } from 'src/app/services/cargo.service';
import { Cargo } from 'src/app/models/negocio/cargo';
import { MensagemComponent } from '../mensagem/mensagem.component';
import { TipoMensagem } from 'src/app/models/enum/tipoMensagem';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css']
})
export class CargoComponent implements OnInit {
  cargoModal: Cargo;

  constructor(
    private service: CargoService,
    private mensagem: MensagemComponent

  ) { }

  listaItens: any[];
  cargo: Cargo;
  cargoDescricao: any;
  cargoDescricaoModal: any;
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

    this.cargo = new Cargo();
    this.cargo.nome = this.cargoDescricao;
    this.cargo.ativo = true;

    this.service.incluir(this.cargo)
    .then(response=>{
      this.listaItens = response;
      this.mensagem.showTopCenter('Cargo cadastrado com sucesso', TipoMensagem.sucesso);
      this.pesquisar();
      this.cargoDescricao = null;
    })
  }


  controlaModal(id){

    this.cargoModal = new Cargo();

      this.service.buscarId(id)
      .then(response=>{
        this.cargoModal = response;
        this.cargoDescricaoModal = response.nome;
        this.modalEditar = true;
      })
  }

  editar(){
    this.cargo = new Cargo();
    this.cargo.id = this.cargoModal.id;
    this.cargo.nome = this.cargoDescricaoModal;
    this.cargo.ativo = true;

    this.service.alterar(this.cargo)
    .then(response=>{
      this.listaItens = response;
      this.mensagem.showTopCenter('Cargo alterado com sucesso', TipoMensagem.sucesso);
      this.pesquisar();
     this.modalEditar = false;
    })
  }
  excluir(cargo){

    this.cargo = new Cargo();
    this.cargo = cargo;
    this.cargo.ativo = false;
    this.service.alterar(this.cargo)
    .then(response=>{
      this.listaItens = response;
      this.mensagem.showTopCenter('Cargo excluído com sucesso', TipoMensagem.sucesso);
      this.pesquisar();
    })


  }
}
