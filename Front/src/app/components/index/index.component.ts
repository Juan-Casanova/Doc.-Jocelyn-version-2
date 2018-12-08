import { Component, OnInit } from '@angular/core';
import {ComentariosService} from '../../services/comentarios.service'
import { Comentario } from '../../models/Comentario';
import  swal from 'sweetalert';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [NgbCarouselConfig] 
})
export class IndexComponent implements OnInit {

  images = [1, 2, 3, 4,5,6,7,8,9].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);


  comentarios:Comentario[];
  nombre:string;
  mensaje:string;
  calificacion:number;

  constructor(private comentariosService:ComentariosService, config:NgbCarouselConfig){
    this.comentariosService.getComentario()
    .subscribe(comentarios=>{
      this.comentarios=comentarios
      console.log(comentarios)
    });
    // config.interval = 5000;
    // config.wrap = false;
    // config.keyboard = false;
    // config.pauseOnHover = false;
    
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

