import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { LogeoService } from 'src/app/servicio/logeo.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  mostrarEdit:boolean=false;
  data:any;
  correo:any;
  nombre:any;
  user:any;
  userId:any;

  readonly endpoint:string = 'http://localhost:80/APIopenweatherapp/registrar/pedir-users.php';
  readonly endpointEliminar:string = 'http://localhost:80/APIopenweatherapp/registrar/eliminar-user.php';
  readonly endpointEditar:string = 'http://localhost:80/APIopenweatherapp/registrar/editar-user.php';

  constructor(public logeo: LogeoService) { 
  }

  ngOnInit(): void {
    if(this.logeo.getAuth()=='true'){
      fetch(this.endpoint,{
        method: 'POST',
        body: JSON.stringify('')
      }).then(res=>res.json()).then(data => {
        this.data = data.listaUsuarios;
      });
    }else if(this.logeo.getAuth()=='false' ){
      setInterval(function(){
        location.href="http://localhost:4200/clima";
      },100);
    }
    console.log(this.nombre);
    if(this.logeo.getId()!=='1'){
      setInterval(function(){
        location.href="http://localhost:4200/login";
      },1000);
    }

  }

  eliminar(id:any){
    fetch(this.endpointEliminar,{
      method: 'POST',
      body: JSON.stringify({"userId":id})
    });
    location.reload();
  }

  editar(id:any, name:any, usuario:any, email:any){
    this.userId = id;
    this.nombre = name;
    this.user = usuario;
    this.correo = email;
    this.mostrarEdit = true;
  }
  terminarEditar(name:any, usuario:any, email:any){
    /**/
    this.userId = this.userId;
    this.nombre = name;
    this.user = usuario;
    this.correo = email;
    fetch(this.endpointEditar,{
      method: 'POST',
      body: JSON.stringify({"userId":this.userId,"nombre":this.nombre,"correo":this.correo,"usuario":this.user})
    });
    this.mostrarEdit = false;
    location.reload();
  }

}
