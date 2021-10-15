import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    TablaUsuariosComponent
  ],
 
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
    bootstrap: [TablaUsuariosComponent]
 
})
export class UsuariosModule { }
