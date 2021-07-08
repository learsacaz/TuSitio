import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenweatherService {

  URL: string ='';
  apiKey: string = '&appid=e9eb1d0950d971f208e728d65d714f1d';
  unidades: string = '&units=metric';

  constructor(private http: HttpClient) {
    this.URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  }

  getData(city:string){
    return this.http.get(`${this.URL}${city}${this.apiKey}${this.unidades}`);
  }
}
