import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ApoioGeralService } from './apoio-geral.service';
import { Perfil } from '../models/negocio/perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  apiConexao = 'http://localhost:8080';
  constructor(
    private apoioService: ApoioGeralService,
    private http: HttpClient
  ) { }



  listarPerfil() {
    return this.http.get<Array<any>>(this.apiConexao + '/perfil/listar');
  }
  listar() {
    return this.http.get<Array<any>>(this.apiConexao + '/perfil/pesquisar');
  }

  buscarId(id: any): Promise<any> {
    return this.http.get(`${environment.apiUrl}/perfil/buscarPorId/${id}`)
      .toPromise()
      .catch(erro => Promise.reject(erro));
  }

  incluir(perfil: Perfil): Promise<any> {
    return this.http.post(`${environment.apiUrl}/perfil/incluir`, perfil)
      .toPromise()
      .catch(erro => Promise.reject(erro));
  }


  alterar(perfil: Perfil): Promise<any> {
    return this.http.put(`${environment.apiUrl}/perfil/alterar`, perfil)
      .toPromise()
      .catch(erro => Promise.reject(erro));
  }

  // delete(perfil): Promise<any> {
  //   return this.http.delete<void>(`${environment.apiUrl}/perfil/delete`, perfil)
  //     .toPromise()
  //     .catch(erro => Promise.reject(erro));
  // }

  delete(perfil: Perfil): Promise<any> {
    return this.http.put(`${environment.apiUrl}/perfil/alterar`, perfil)
      .toPromise()
      .catch(erro => Promise.reject(erro));
  }

}
