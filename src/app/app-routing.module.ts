import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoComponent } from './componentes/ingreso/ingreso.component';
import { HomeComponent } from './componentes/home/home.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { Error404Component } from './componentes/error404/error404.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ProfileProductComponent } from './componentes/profile-product/profile-product.component';
import { ProductsListGridComponent } from './componentes/products-list-grid/products-list-grid.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { CompraComponent } from './componentes/compra/compra.component';

const routes: Routes = [
  {
    path: "ingreso",
    component: IngresoComponent
  },
  {
    path: "home",
    component: HomeComponent,  
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full'
      },
      {
        path: 'products',
        component: ProductsListGridComponent
      },
      {
        path: 'product/:id',
        component: ProfileProductComponent
      },
      {
        path: 'nosotros',
        component: NosotrosComponent,
      },
      {
        path: 'carrito',
        component: CarritoComponent,
      },
      {
        path: 'compraFinal',
        component: CompraComponent
      }
     
    ]
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
