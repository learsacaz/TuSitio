import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnvioRoutingModule } from './envio-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EnvioComponent } from './envio.component';


@NgModule({
  declarations: [
    EnvioComponent
  ],
  imports: [
    CommonModule,
    EnvioRoutingModule,
    ReactiveFormsModule
  ]
})
export class EnvioModule { }
