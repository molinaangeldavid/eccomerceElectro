import { Component } from '@angular/core';
import { ProductsService } from 'src/app/servicios/products.service';
import { hogar } from 'src/app/data/hogar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private productsService:ProductsService){
  }

  products!: any[];

  ngOnInit(){
    this.products = hogar;
  }

  changeProductos(newProds: any[]){
    this.products = newProds
  }


  

}
