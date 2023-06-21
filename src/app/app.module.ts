import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';

import { ProductoComponent } from './componentes/producto/producto.component'
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { IngresoComponent } from './componentes/ingreso/ingreso.component';
import { HomeComponent } from './componentes/home/home.component';
import { Error404Component } from './componentes/error404/error404.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegistroComponent } from './componentes/registro/registro.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

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
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    NgbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
