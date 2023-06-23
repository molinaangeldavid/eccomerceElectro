import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoComponent } from './componentes/ingreso/ingreso.component';
import { HomeComponent } from './componentes/home/home.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { Error404Component } from './componentes/error404/error404.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';

const routes: Routes = [
  {
    path: "ingreso",
    component: IngresoComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "nosotros",
    component: NosotrosComponent
  },
  {
    path: "registro",
    component: RegistroComponent
  },
  {
    path: "",
    component: IngresoComponent,
    
  },
  {
    path: "**",
    component: Error404Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
