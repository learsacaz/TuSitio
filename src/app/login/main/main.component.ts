import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogeoService } from 'src/app/servicio/logeo.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public formLogin = new FormGroup({});
  readonly endpoint:string = 'http://localhost:80/APIopenweatherapp/registrar/ingresar-user.php';
  readonly endpointIniciar:string = 'http://localhost:80/APIopenweatherapp/registrar/iniciar-sesion.php';

  constructor(private formBuilder: FormBuilder,public logeoService: LogeoService) {}

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      user: ['',Validators.required],
      pass: ['',Validators.required]
    });
    this.logeoService.setVer('ver');
    if(this.logeoService.getAuth()=='cerrando'){
      this.logeoService.setAuth('false');      
    }else if(this.logeoService.getAuth()=='true'){
      setInterval(function(){
        location.href="http://localhost:4200/clima";
      },2000);
    }
  }

  send():any{

    if(this.formLogin.valid){
      fetch(this.endpoint,{
        method: 'POST',
        body: JSON.stringify(this.formLogin.value)
      }).then(res=>res.json()).then(data => {
        if(this.formLogin.value['user'] == data.listaUsuario[0]['user'] && this.formLogin.value['pass'] == data.listaUsuario[0]['pass']){
          this.logeoService.setAuth('true');
          
          this.logeoService.setNombre(data.listaUsuario[0].nombre);
          this.logeoService.setId(data.listaUsuario[0].id);
          this.logeoService.setUser(data.listaUsuario[0].user);
          fetch(this.endpointIniciar,{
            method: 'POST',
            body: JSON.stringify(this.logeoService.getId())
          });
          setInterval(function(){
            location.href="http://localhost:4200/clima";
          },2000);  
        }
      }).catch(err=>{
        alert("Ingrese los datos correctamente");
      });
    }else{
    }
  }

}
