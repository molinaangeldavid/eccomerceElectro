import { Component } from '@angular/core';
import { ProductsService } from 'src/app/servicios/products.service';
import { hogar } from 'src/app/data/hogar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(private productsService: ProductsService, private router: Router){}

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
