import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LogeoService } from 'src/app/servicio/logeo.service';
import { GestionService } from 'src/app/servicios/gestion.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public formLogin = new FormGroup({});
  datos:any=null;
  //';
  readonly endpointIniciar:string = 'http://localhost:80/APIopenweatherapp/registrar/';

  constructor(private formBuilder: FormBuilder,public logeoService: LogeoService, private consumo: GestionService) {}

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      user: ['',Validators.required],
      pass: ['',Validators.required]
    });
    if(this.logeoService.getVer()=='nover'){
      this.logeoService.setVer('nover');
    }else{
      this.logeoService.setVer('ver');
    }
    if(this.logeoService.getAuth()=='cerrando'){
      this.logeoService.setAuth('false');      
    }else if(this.logeoService.getAuth()=='true'){
      setInterval(function(){
        location.href="http://localhost:4200/mensajes";
      },2000);
    }
  }

  send():any{

    if(this.formLogin.valid){
      this.consumo.postDatos('ingresar-user.php', JSON.stringify(this.formLogin.value)).subscribe(
          
        (data) => {

          this.datos = data;
          console.log(this.datos);

          if(this.datos==0){

            alert("Usuario y/o contraseña equivocados");

          }else if(this.formLogin.value['user'] == this.datos[0]['user'] && this.formLogin.value['pass'] == this.datos[0]['pass']){
            this.logeoService.setAuth('true');
            this.logeoService.setVer('nover');
            this.logeoService.setNombre(this.datos[0]['nombre']);
            this.logeoService.setId(this.datos[0]['id']);
            this.logeoService.setUser(this.datos[0]['user']);
            this.consumo.postDatos('iniciar-sesion.php', JSON.stringify(this.logeoService.getId()));
            setInterval(function(){
              location.href="http://localhost:4200/mensajes";
            },2000);
          }

        }

      );
      
    }else{
      alert("Por favor llenar todos los campos");
    }
  }

}
