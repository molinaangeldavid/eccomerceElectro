import { Component } from '@angular/core';
import { ProductsService } from 'src/app/servicios/products.service';
import { hogar } from 'src/app/data/hogar';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/servicios/user-data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  
  mostrar!: boolean;
  user!: string;

  valueSvg: string = '<img src="../../../assets/person-circle.svg" alt="profile">'
  value!: string;

  shop!: number
  
  constructor(
    private productsService: ProductsService, 
    private router: Router,
    private userService: UserDataService){
      if(userService.getUser() != undefined){
        this.mostrar = true
        this.user = this.userService.getUser()!;
        this.value = this.valueSvg;
        this.shop = 0
    }
  }

  onMouseOver(){
    this.value = this.user
  }

  onMouseOut(){
    this.value = this.valueSvg;
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




}
