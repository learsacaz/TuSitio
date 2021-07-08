import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LogeoService } from 'src/app/servicio/logeo.service';

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

  constructor(private formBuilder: FormBuilder,public logeo:LogeoService) {}

  ngOnInit(): void {
    this.formMensaje = this.formBuilder.group({
      mensaje: ['',Validators.required],
      user_id: [this.logeo.getId()]
    });
    
    
    if(this.logeo.getAuth()=='false'){
      setInterval(function(){
        location.href="http://localhost:4200/login";
      },2000);
    }
  }

  send():any{

    if(this.formMensaje.valid){
      fetch(this.endpoint,{
        method: 'POST',
        body: JSON.stringify(this.formMensaje.value)
      }).then(res=>res.json());
      console.log(this.formMensaje.value);
      setInterval(function(){
        location.href="http://localhost:4200/mensajes";
      },1000);
    }else{
      alert("Por favor, ingrese los datos correctos");
    }
  }
}
