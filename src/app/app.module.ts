import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ClimaRoutingModule } from './clima/clima-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainModuleL } from './login/main/main.module';
import { MainModuleR } from './register/main/main.module';
import { MainModuleA } from './administrar/main/main.module';
import { FormsModule } from '@angular/forms';
import { PruebaComponent } from './prueba/prueba.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClimaRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MainModuleR,
    MainModuleL,
    MainModuleA,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
