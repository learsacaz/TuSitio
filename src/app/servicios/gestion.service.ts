import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  private readonly endpoint:string = 'http://localhost:80/APIopenweatherapp/registrar/';

  constructor(private http: HttpClient) { }

  private header = new HttpHeaders()
    .set('Accept','application/json')
    .set('Content-Type', 'application/json ; charset=utf-8');

  private opciones = {
    headers: this.header
  }

  //Metodo get
  public getDatos(directionApi: string):Observable<any>{
    return this.http.get(this.endpoint+directionApi, this.opciones);
  }

  //Metodo post 
  public postDatos(directionApi: string, body:any){
    return this.http.post(this.endpoint+directionApi, body, this.opciones);
  }

  //Metodo put
  public putDatos(directionApi: string, body:any){
    return this.http.put(this.endpoint+directionApi, body, this.opciones);
  }
}
