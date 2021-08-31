import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { LogeoService } from 'src/app/servicio/logeo.service';
import { GestionService } from 'src/app/servicios/gestion.service';

@Component({
  selector: 'app-envio',
  templateUrl: './envio.component.html',
  styleUrls: ['./envio.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class EnvioComponent implements OnInit {


  public formMensaje = new FormGroup({});
  readonly endpoint:string = 'http://localhost:80/APIopenweatherapp/registrar/ingresar-mensaje.php';

  constructor(private formBuilder: FormBuilder,public logeo:LogeoService, private consumo:GestionService){
    this.formMensaje = this.formBuilder.group({
      mensaje: ['',Validators.required],
      user_id: [this.logeo.getId()]
    });
  }

  ngOnInit(): void {
    if(this.logeo.getAuth()=='false'){
      setInterval(function(){
        location.href="http://localhost:4200/login";
      },2000);
    }
  }

  send():any{

    if(this.formMensaje.valid){
      
      console.log(this.formMensaje.value);
      this.consumo.postDatos('ingresar-mensaje.php',JSON.stringify(this.formMensaje.value)).subscribe(
        (data)=>{
        }
      );
      location.href="http://localhost:4200/mensajes";

    }else{
      alert("Por favor, ingrese los datos correctos");
    }
  }
}
