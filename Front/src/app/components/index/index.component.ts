import { Component, OnInit } from '@angular/core';
import {ComentariosService} from '../../services/comentarios.service'
import { Comentario } from '../../models/Comentario';
import  swal from 'sweetalert';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  comentarios:Comentario[];
  nombre:string;
  mensaje:string;
  calificacion:number;

  constructor(private comentariosService:ComentariosService){
    this.comentariosService.getComentario()
    .subscribe(comentarios=>{
      this.comentarios=comentarios
      console.log(comentarios)
    });
  }

  contactForm(form){
    this.comentariosService.sendMessage(form).subscribe(()=>{
      swal("formulario de contacto","mensaje en viado",'success').then(ok=>{
        if(ok){
          window.location.href="/index.html"
        }
      })
    });
  }
  
  
  title = 'app';
  lat:number=20.598688;
  lng:number=-100.376342;
  zoom:number=17
  
  ngOnInit() {
  }

}

