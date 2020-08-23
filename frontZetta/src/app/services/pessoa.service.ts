import { Injectable } from '@angular/core';
import { ApoioGeralService } from './apoio-geral.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pessoa } from '../models/negocio/pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {



  apiConexao = 'http://localhost:8080';

  constructor(
    private apoioService: ApoioGeralService,
    private http: HttpClient
  ) { }


  listarPessoa() {
    return this.http.get<Array<any>>(this.apiConexao + '/pessoa/listar');
  }
  listar() {
    return this.http.get<Array<any>>(this.apiConexao + '/pessoa/pesquisar');
  }

  buscarId(id: any): Promise<any> {
    return this.http.get(`${environment.apiUrl}/pessoa/buscarPorId/${id}`)
      .toPromise()
      .catch(erro => Promise.reject(erro));
  }

  incluir(pessoa: Pessoa): Promise<any> {
    return this.http.post(`${environment.apiUrl}/pessoa/incluir`, pessoa)
      .toPromise()
      .catch(erro => Promise.reject(erro));
  }


  alterar(pessoa: Pessoa): Promise<any> {
    return this.http.put(`${environment.apiUrl}/pessoa/alterar`, pessoa)
      .toPromise()
      .catch(erro => Promise.reject(erro));
  }

  delete(pessoa: Pessoa): Promise<any> {
    return this.http.put(`${environment.apiUrl}/pessoa/alterar`, pessoa)
      .toPromise()
      .catch(erro => Promise.reject(erro));
  }

}
