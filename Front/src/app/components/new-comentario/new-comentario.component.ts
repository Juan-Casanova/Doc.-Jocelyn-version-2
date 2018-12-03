import { Component, OnInit } from '@angular/core';
import {ComentariosService} from '../../services/comentarios.service'
import {Comentario} from '../../models/Comentario'
import swal from 'sweetalert';

@Component({
  selector: 'app-new-comentario',
  templateUrl: './new-comentario.component.html',
  styleUrls: ['./new-comentario.component.css']
})
export class NewComentarioComponent implements OnInit {

  comentarios:Comentario[];
  nombre:string;
  mensaje:string;
  calificacion:number;

  constructor(private comentariosService:ComentariosService){
    this.comentariosService.getComentario()
    .subscribe(comentarios=>{
      this.comentarios=comentarios
    });
  }

  ngOnInit() {
  }

  ComentarioForm(event){
    const newComentario:Comentario={
      NombreCliente:this.nombre,
      Comentario:this.mensaje,
      Calificacion:this.calificacion
    };
    this.comentariosService.addComentario(newComentario)
    .subscribe(comentario=>{
      this.comentarios.push(comentario);
      console.log(this.comentarios)
      swal(
        "GRACIAS POR SU COMENTARIO","su comentario ha sido enviado",'success').then(ok=>{
        if(ok){
          window.location.href="/index.html"
        }
      })
    });
  }

}

