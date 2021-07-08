import { Component, OnInit } from '@angular/core';
import { LogeoService } from 'src/app/servicio/logeo.service';
import { OpenweatherService } from './services/openweather.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  ciudadUno:any;
  ciudadDos:any;
  ciudadTres:any;
  ciudadCuatro:any;
  ciudadCinco:any;
  
  constructor(private oPService: OpenweatherService, public logged:LogeoService){
  }

  ngOnInit(){
    if(this.logged.getAuth()=='false'){
      setInterval(function(){
        location.href="http://localhost:4200/login";
      },2000);
    }
  }

  //Ciudades de Colombia
  mostrarClimaColombia(){

      this.oPService.getData('bogota').subscribe(
        res => this.ciudadUno = res,
        err => console.log(err)
      )
      this.oPService.getData('cali').subscribe(
        res => {
          this.ciudadDos = res;
        },
        err => console.log(err)
      )
      this.oPService.getData('barranquilla').subscribe(
        res => {
          this.ciudadTres = res;
        },
        err => console.log(err)
      )
      this.oPService.getData('tunja').subscribe(
        res => {
          this.ciudadCuatro = res;
        },
        err => console.log(err)
      )
      this.oPService.getData('medellin').subscribe(
        res => {
          this.ciudadCinco = res;
        },
        err => console.log(err)
      )
    
  }

  //Ciudades de Argentina
  mostrarClimaArgentina(){
    this.oPService.getData('cordoba').subscribe(
      res => this.ciudadUno = res,
      err => console.log(err)
    )
    this.oPService.getData('buenos%20aires').subscribe(
      res => this.ciudadDos = res,
      err => console.log(err)
    )
    this.oPService.getData('rosario').subscribe(
      res => this.ciudadTres = res,
      err => console.log(err)
    )
    this.oPService.getData('mar%20del%20plata').subscribe(
      res => this.ciudadCuatro = res,
      err => console.log(err)
    )
    this.oPService.getData('santa%20fe').subscribe(
      res => this.ciudadCinco = res,
      err => console.log(err)
    )
  }

  //Ciudades de Mexico
  mostrarClimaMexico(){
    this.oPService.getData('monterrey').subscribe(
      res => this.ciudadUno = res,
      err => console.log(err)
    )
    this.oPService.getData('guadalajara').subscribe(
      res => this.ciudadDos = res,
      err => console.log(err)
    )
    this.oPService.getData('tijuana').subscribe(
      res => this.ciudadTres = res,
      err => console.log(err)
    )
    this.oPService.getData('puebla').subscribe(
      res => this.ciudadCuatro = res,
      err => console.log(err)
    )
    this.oPService.getData('mexico%20city').subscribe(
      res => this.ciudadCinco = res,
      err => console.log(err)
    )
  }

  //Ciudades de Estados Unidos
  mostrarClimaEstadosUnidos(){
    this.oPService.getData('new%20york').subscribe(
      res => this.ciudadUno = res,
      err => console.log(err)
    )
    this.oPService.getData('chicago').subscribe(
      res => this.ciudadDos = res,
      err => console.log(err)
    )
    this.oPService.getData('houston').subscribe(
      res => this.ciudadTres = res,
      err => console.log(err)
    )
    this.oPService.getData('philadelphia').subscribe(
      res => this.ciudadCuatro = res,
      err => console.log(err)
    )
    this.oPService.getData('miami').subscribe(
      res => this.ciudadCinco = res,
      err => console.log(err)
    )
  }

  //Ciudades de Chile
  mostrarClimaChile(){
    this.oPService.getData('santiago').subscribe(
      res => this.ciudadUno = res,
      err => console.log(err)
    )
    this.oPService.getData('concepcion').subscribe(
      res => this.ciudadDos= res,
      err => console.log(err)
    )
    this.oPService.getData('valparaiso').subscribe(
      res => this.ciudadTres= res,
      err => console.log(err)
    )
    this.oPService.getData('antofagasta').subscribe(
      res => this.ciudadCuatro = res,
      err => console.log(err)
    )
    this.oPService.getData('vina%20del%20mar').subscribe(
      res => this.ciudadCinco = res,
      err => console.log(err)
    )
  }

  noValido(){
    location.href='http://localhost:4200/login';
  }

}
