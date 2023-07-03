import { Component } from '@angular/core';
import { ProductsService } from 'src/app/servicios/products.service';
import { hogar } from 'src/app/data/hogar';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/servicios/user-data.service';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  
  showEmail: boolean = false;
  showPassWord: boolean = false;

  mostrar!: boolean;
  user: any;

  productsShop: any = 0;
  
  sidebarVisible: boolean = false;

  typeEmailUser: any = 'password'

  constructor(
    private productsService: ProductsService, 
    private router: Router,
    private userService: UserDataService,
    private carritoService: CarritoService){
      if(userService.getUser() != undefined){
        this.mostrar = true
        this.user = this.userService.getUser()!;
      }
      this.carritoService.getNumberProducts().subscribe(
        data => 
        this.productsShop = data
      )
  }

  isMenuCollapsed = true;

  collapsed = true;

  sendTypeOfProduct(value: string){
    let filter = hogar.filter(x => x.categoria === value)
    this.router.navigate(['/home'])
    this.productsService.setProducts(filter)
  }

  go(){
    this.router.navigate(['/home'])
    this.productsService.setProducts(hogar)
  }

  logOut(){
    this.userService.setUser(undefined)
    this.mostrar = false;
  }

  toggleShow(){
    this.showEmail = !this.showEmail;
    this.typeEmailUser = this.showEmail ? 'text' : 'password';
  }


}
