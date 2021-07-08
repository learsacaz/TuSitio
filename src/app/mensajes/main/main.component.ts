import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { LogeoService } from 'src/app/servicio/logeo.service';

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

  constructor(public logeo: LogeoService) {}

  ngOnInit(): void {
    if(this.logeo.getAuth()=='true'){
      fetch(this.endpoint,{
        method: 'POST',
        body: JSON.stringify('')
      }).then(res=>res.json()).then(data => {
        this.data = data.listaMensajes;
  
      });
    }else if(this.logeo.getAuth()=='false'){
      setInterval(function(){
        location.href="http://localhost:4200/login";
      },2000);
    }

  }

}
