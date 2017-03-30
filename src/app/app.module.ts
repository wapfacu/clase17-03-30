import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';




//Codigo agregado
import {RouterModule,Routes} from'@angular/router';
const rutasDeNavegacion: Routes = [{path: 'login', component: LoginComponent}];
//Final codigo editado

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaginaNoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rutasDeNavegacion)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
