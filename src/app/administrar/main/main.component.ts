import { DOCUMENT } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { LogeoService } from 'src/app/servicio/logeo.service';
import { GestionService } from 'src/app/servicios/gestion.service';

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

  constructor(public logeo: LogeoService, private consumo:GestionService) { 
  }

  ngOnInit(): void {
    if(this.logeo.getAuth()=='true'){
      this.getUsuarios();
    }else if(this.logeo.getAuth()=='false' ){
      setInterval(function(){
        location.href="http://localhost:4200/clima";
      },100);
    }
    if(this.logeo.getId()!=='1'){
      location.href="http://localhost:4200/login";
    }

  }

  private getUsuarios(){
    this.consumo.getDatos('pedir-users.php').subscribe(
      (data)=>{
        this.data = data.listaUsuarios;
      }
    );
  }

  eliminar(id:any){
    console.log(JSON.stringify({"userId":id}));
    this.consumo.postDatos('eliminar-user.php',  JSON.stringify({"userId":id})).subscribe(
      (data)=>{
      }
    );
    this.getUsuarios();
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
    this.consumo.putDatos('editar-user.php',{"userId":this.userId,"nombre":this.nombre,"correo":this.correo,"usuario":this.user}).subscribe(
      (data)=>{
      }
    );
    this.mostrarEdit = false;
    this.getUsuarios();
  }

}
