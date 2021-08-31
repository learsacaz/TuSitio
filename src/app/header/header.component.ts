import { Component, OnInit, Input } from '@angular/core';
import { LogeoService } from '../servicio/logeo.service';
import { GestionService } from '../servicios/gestion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(public loggedService: LogeoService, private consumo:GestionService) { 
  }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.consumo.postDatos('terminar-sesion.php',JSON.stringify(this.loggedService.getId())).subscribe((data)=>{});
    this.loggedService.setVer('ver');
    this.loggedService.setAuth('cerrando');
    this.loggedService.setNombre('');
    this.loggedService.setUser('');
    this.loggedService.setId('');
    
    setInterval(function(){
      location.href="http://localhost:4200/login";
    },2000);
  }

}
