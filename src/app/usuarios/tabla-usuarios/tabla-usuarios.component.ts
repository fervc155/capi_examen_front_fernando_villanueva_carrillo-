import { Component, OnInit } from '@angular/core';
 import {RestService} from './../../rest.service';
 import { environment } from './../../../environments/environment';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {


  public usuarios:any = []

  constructor(private RestService:RestService) { }

  ngOnInit(): void {
    this.loadData();
  }

  public loadData(){
    this.RestService.get(environment.backURL).subscribe(respuesta=>{
      this.usuarios= respuesta;
      console.log(respuesta);
    })
  }

}
