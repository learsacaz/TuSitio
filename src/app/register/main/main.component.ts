import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  

  public formLogin = new FormGroup({});
  constructor(private formBuilder: FormBuilder, public logeoService:LogeoService,private consumo: GestionService){
    this.formLogin = this.formBuilder.group({
      name: ['',Validators.required],
      user: ['',Validators.required],
      email: ['',[Validators.required,Validators.email,]],
      pass: ['',Validators.required]
    });
  }

  ngOnInit(): void {
    
    if(this.logeoService.getVer()=='nover'){
      this.logeoService.setVer('nover');
    }else{
      this.logeoService.setVer('ver');
    }
    if(this.logeoService.getAuth()=='cerrando'){
      this.logeoService.setAuth('false');      
    }else if(this.logeoService.getAuth()=='true'){
      location.href="http://localhost:4200/mensajes";
    }
  }

  send():any{

    if(this.formLogin.valid){
      
      this.consumo.postDatos('registrar-user.php', JSON.stringify(this.formLogin.value)).subscribe(
        (data)=>{
        }
      );
      alert("El usuario se ha creado correctamente, redirigiendo al inicio");
      location.href="http://localhost:4200/login";
    }else{
      alert("Por favor, ingrese los datos correctos");
    }
  }
}
