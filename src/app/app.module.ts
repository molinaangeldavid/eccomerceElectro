import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { ProductoComponent } from './componentes/producto/producto.component'
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { IngresoComponent } from './componentes/ingreso/ingreso.component';
import { HomeComponent } from './componentes/home/home.component';
import { Error404Component } from './componentes/error404/error404.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ProductsListGridComponent } from './componentes/products-list-grid/products-list-grid.component';
import { ProfileProductComponent } from './componentes/profile-product/profile-product.component';
import { AsideFilterComponent } from './componentes/aside-filter/aside-filter.component';
import { ContainerProductsComponent } from './componentes/container-products/container-products.component';
import { CarritoComponent } from './componentes/carrito/carrito.component'

import { NgbCollapseModule,NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PaginatorModule } from 'primeng/paginator';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductoComponent,
    HeaderComponent,
    FooterComponent,
    IngresoComponent,
    HomeComponent,
    Error404Component,
    RegistroComponent,
    NosotrosComponent,
    ProductsListGridComponent,
    ProfileProductComponent,
    AsideFilterComponent,
    ContainerProductsComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    NgbCollapseModule,
    PaginatorModule,
    CardModule,
    TableModule,
    ToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
