import { Component, OnInit } from '@angular/core';
import {ComentariosService} from '../../services/comentarios.service'
import { Comentario } from '../../models/Comentario';
import  swal from 'sweetalert';

@Component({
  selector: 'app-admi',
  templateUrl: './admi.component.html',
  styleUrls: ['./admi.component.css']
})
export class AdmiComponent implements OnInit {

  comentarios:Comentario[];
  nombre:string;
  mensaje:string;
  calificacion:number;

   constructor(private comentariosService:ComentariosService){
    this.comentariosService.getComentario()
    .subscribe(comentarios=>{
      this.comentarios=comentarios
      //console.log(comentarios)
    });
  }

  ngOnInit() {
  }

  deleteComentario(id) {
    const response = confirm('are you sure to delete it?');
    if (response ){
      const comentarios = this.comentarios;
      this.comentariosService.deleteComentario(id)
        .subscribe(data => {
          console.log(data);
          
            for(let i = 0; i < comentarios.length; i++) {
              if(comentarios[i]._id == id) {
                comentarios.splice(i, 1);
          
            }
          }
        })
    }
  }     

}
