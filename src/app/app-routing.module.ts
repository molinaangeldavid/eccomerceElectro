import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoComponent } from './componentes/ingreso/ingreso.component';
import { HomeComponent } from './componentes/home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { Error404Component } from './componentes/error404/error404.component';

const routes: Routes = [
  {
    path: "",
    component: IngresoComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "registro",
    component: RegistroComponent
  },
  {
    path: "**",
    component: Error404Component
  },
  {
    path: "ingreso",
    component: IngresoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
