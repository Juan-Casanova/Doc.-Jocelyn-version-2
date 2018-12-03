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
import { AdmiComponent } from './components/admi/admi.component'


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
    AdmiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAdZXa2z_LzhgpkN-eqGuM73-fTOIl1T9c'
    })
  ],
  providers: [ComentariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
