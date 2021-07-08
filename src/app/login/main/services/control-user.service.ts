import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MainComponent } from '../main.component';

@Injectable({
  providedIn: 'root'
})
export class ControlUserService {

  URL:string = '';

  constructor (private http: HttpClient){}

  

}
