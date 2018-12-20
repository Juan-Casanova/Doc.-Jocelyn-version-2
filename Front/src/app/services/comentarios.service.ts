import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
// import 'rxjs/Rx';
import 'rxjs/add/operator/map'

import {Comentario}from '../models/Comentario';

@Injectable()
export class ComentariosService {

  domain:string='http://localhost:3000';//http://localhost:3000

  constructor(private http:HttpClient) { }

  getComentario(){
    return this.http.get<Comentario[]>(`${this.domain}/api/Comentario`)
    .map(res=>res);
  }
  addComentario(newComentario:Comentario){
    return this.http.post<Comentario>(`${this.domain}/api/Comentario`,newComentario)
    .map(res=>res);
  }
  // updateComentario(){}
  deleteComentario(id){
    return this.http.delete<Comentario>(`${this.domain}/api/Comentario/${id}`)
    .map(res=>res);
  }

  sendMessage(body){
    return this.http.post(`${this.domain}/form/formulario`,body);
  }
}
