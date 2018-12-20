import{RouterModule,Routes}from '@angular/router'

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule}from '@angular/forms'

import {ComentariosService} from './services/comentarios.service';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';

import {AgmCoreModule}from '@agm/core';
import { NewComentarioComponent } from './components/new-comentario/new-comentario.component';
import { AdmiComponent } from './components/admi/admi.component';
import { CalendarioComponent } from './components/calendario/calendario.component';


const routes:Routes=[
  {path:'',component:IndexComponent},
  {path:'new-comentario',component:NewComentarioComponent},
  {path:'administrador',component:AdmiComponent},
  {path:'**',component:IndexComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NewComentarioComponent,
    AdmiComponent,
    CalendarioComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyDqXBoVB-9QVLxpoZBW7rkqs6PB7x_8wKM'
      
    }),
    
  ],
  providers: [ComentariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
