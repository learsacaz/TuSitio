import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { LogeoService } from 'src/app/servicio/logeo.service';
import { GestionService } from 'src/app/servicios/gestion.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class MainComponent implements OnInit {

  data:any;

  readonly endpoint:string = 'http://localhost:80/APIopenweatherapp/registrar/pedir-mensajes.php';

  constructor(public logeo: LogeoService, private consumo:GestionService) {}

  ngOnInit(): void {
    if(this.logeo.getAuth()=='true'){
      this.getMensajes();
    }else if(this.logeo.getAuth()=='false'){
      setInterval(function(){
        location.href="http://localhost:4200/login";
      },2000);
    }

  }
  
  private getMensajes(){
    this.consumo.getDatos('pedir-mensajes.php').subscribe(
      (data)=>{
        this.data = data.listaMensajes;
      }
    );
  }

}
