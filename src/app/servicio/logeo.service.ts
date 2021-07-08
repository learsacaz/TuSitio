import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogeoService {
  

  constructor() { 
  }
  setAuth(value:string){
    localStorage.setItem('auth',value);
  }
  getAuth(){
    return localStorage.getItem('auth');
  }
  setNombre(value:string){
    localStorage.setItem('name',value);
  }
  getNombre(){
    return localStorage.getItem('name');
  }
  setUser(value:string){
    localStorage.setItem('user',value);
  }
  getUser(){
    return localStorage.getItem('user');
  }
  setId(value:string){
    localStorage.setItem('ididentified',value);
  }
  getId(){
    return localStorage.getItem('ididentified');
  }

  setVer(value:string){
    localStorage.setItem('lector',value);
  }
  getVer(){
    return localStorage.getItem('lector');
  }
  
  cerrarSesion(){
    location.href="http://localhost:4200/login";
  }


}
