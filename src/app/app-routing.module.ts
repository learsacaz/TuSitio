import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'clima',
    loadChildren:()=>import('./clima/clima.module').then(m=>m.ClimaModule)
  },
  {
    path: 'login',
    loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule)
  },
  {
    path: 'register',
    loadChildren:()=>import('./register/register.module').then(m=>m.RegisterModule)
  },
  {
    path: 'mensajes',
    loadChildren:()=>import('./mensajes/main/main.module').then(m=>m.MainModuleM)
  },
  {
    path: 'mensajes/enviarMensaje',
    loadChildren:()=>import('./mensajes/envio/envio.module').then(m=>m.EnvioModule)
  },
  {
    path: 'administrar',
    loadChildren:()=>import('./administrar/administrar.module').then(m=>m.AdministrarModule)
  },
  {
    path: '**',
    redirectTo:'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
