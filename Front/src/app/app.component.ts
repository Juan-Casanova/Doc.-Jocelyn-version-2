import { Component, OnInit } from '@angular/core';
import {ComentariosService} from './services/comentarios.service'
import { Comentario } from './models/Comentario';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  ngOnInit(){

  }
  
}
