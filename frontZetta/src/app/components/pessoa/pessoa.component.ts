import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/models/negocio/pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';
import { MensagemComponent } from '../mensagem/mensagem.component';
import { TipoMensagem } from 'src/app/models/enum/tipoMensagem';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  pessoaModal: Pessoa;

  sexo = [
    { label: 'F', value: 'F' },
    { label: 'M', value: 'M' }

  ];
  sexoSelecionado: any;
  cpfDescricaoModal: any;
  constructor(
    private service: PessoaService,
    private mensagem: MensagemComponent

  ) { }

  cpf:any;
  dataNascimento: Date;
  listaItens: any[];
  pessoa: Pessoa;
  pessoaDescricao: any;
  pessoaDescricaoModal: any;
  modalEditar: boolean;
  modalAdicionar: boolean;

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

  pad(n) {
    return n < 10 ? '0' + n : n;
  }

  formataDataWS(data: any) {
    return data.getFullYear() + "-" + (this.pad(data.getMonth() + 1)) + "-" + this.pad(data.getDate()) ;
  }

  adicionar(){

    this.pessoa = new Pessoa();
    this.pessoa.nome = this.pessoaDescricaoModal;
    this.pessoa.sexo = this.sexoSelecionado;
    this.pessoa.dataNascimento = this.dataNascimento;
    this.pessoa.ativo = true;
    this.pessoa.cpf = this.cpfDescricaoModal;

    this.service.incluir(this.pessoa)
    .then(response=>{
      this.listaItens = response;
      this.mensagem.showTopCenter('Pessoa cadastrado com sucesso', TipoMensagem.sucesso);
      this.pesquisar();
      this.pessoaDescricao = null;
      this.modalAdicionar = false;
    })
  }



  controlaModalAdicionar(){
    this.pessoaDescricaoModal = null;
    this.sexoSelecionado = null;
    this.dataNascimento = null;
    this.cpfDescricaoModal = null;
    this.modalAdicionar = true;

  }


  controlaModal(id){

    this.pessoaModal = new Pessoa();

      this.service.buscarId(id)
      .then(response=>{
        this.pessoaModal = response;
        this.pessoaDescricaoModal = response.nome;
        this.sexoSelecionado = response.sexo;
        this.dataNascimento = response.dataNascimento;
        this.cpfDescricaoModal = response.cpf;
        this.modalEditar = true;
      })
  }

  editar(){
    this.pessoa = new Pessoa();
    this.pessoa.id = this.pessoaModal.id;
    this.pessoa.nome = this.pessoaDescricaoModal;
    this.pessoa.sexo = this.sexoSelecionado;
    this.pessoa.dataNascimento = this.dataNascimento;
    this.pessoa.ativo = true;

    this.pessoa.cpf = this.cpfDescricaoModal;

    this.service.alterar(this.pessoa)
    .then(response=>{
      this.listaItens = response;
      this.mensagem.showTopCenter('Pessoa alterado com sucesso', TipoMensagem.sucesso);
      this.pesquisar();
     this.modalEditar = false;
    })
  }
  excluir(pessoa){

    this.pessoa = new Pessoa();
    this.pessoa = pessoa;
    this.pessoa.dataNascimento = new Date();
    this.pessoa.ativo = false;


    this.service.alterar(this.pessoa)
    .then(response=>{
      this.listaItens = response;
      this.mensagem.showTopCenter('Pessoa excluído com sucesso', TipoMensagem.sucesso);
      this.pesquisar();
    })


  }

}
