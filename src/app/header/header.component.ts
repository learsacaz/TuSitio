import { Component, OnInit, Input } from '@angular/core';
import { MainComponent } from '../login/main/main.component';
import { LogeoService } from '../servicio/logeo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  readonly endpointsesion:string = 'http://localhost:80/APIopenweatherapp/registrar/terminar-sesion.php';

  constructor(public loggedService: LogeoService) { 
  }

  ngOnInit(): void {
  }

  cerrarSesion(){
    fetch(this.endpointsesion,{
      method: 'POST',
      body: JSON.stringify(this.loggedService.getId())
    });
    this.loggedService.setAuth('cerrando');
    this.loggedService.setNombre('');
    this.loggedService.setUser('');
    this.loggedService.setId('');
    
    setInterval(function(){
      location.href="http://localhost:4200/login";
    },2000);
  }

}
