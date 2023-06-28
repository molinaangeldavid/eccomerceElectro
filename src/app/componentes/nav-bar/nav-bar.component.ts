import { Component } from '@angular/core';
import { ProductsService } from 'src/app/servicios/products.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  constructor(private productsService: ProductsService){}

  isMenuCollapsed = true;

  collapsed = true;

  sendTypeOfProduct(value: string){
    this.productsService.setFilterproducts(value)
  }

}
