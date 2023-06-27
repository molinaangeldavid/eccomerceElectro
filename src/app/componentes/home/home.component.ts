import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductsService } from 'src/app/servicios/products.service';
import { hogar } from 'src/app/data/hogar';
import { tecnologia } from 'src/app/data/tecnologia';
import { belleza } from 'src/app/data/belleza';
import { taller } from 'src/app/data/taller';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnChanges{


  constructor(private productsService:ProductsService){
  }

  products!: any[];

  ngOnInit(){
    let randomArray = Math.round(Math.random() * 4)
    switch(randomArray){
      case 1: 
        this.products = hogar;
        break;
      case 2: 
        this.products = tecnologia;
        break;
      case 3: 
        this.products = belleza;
        break;
      default: 
        this.products = taller;
        break;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.products)
    console.log(changes)
  }

  categoryProduct!: string;

  filterProducts(str: string): any[]{
    let filterProducts: any = [];
    let filter1 = hogar.filter(x => x.categoria === str);
    let filter2 = tecnologia.filter(x => x.categoria === str)
    let filter3 = belleza.filter(x => x.categoria === str)
    let filter4 = taller.filter(x => x.categoria === str)
    if(filter1.length != 0){
      filterProducts = filter1;
    }else if(filter2.length != 0){
      filterProducts = filter2;
    }else if(filter3.length != 0){
      filterProducts = filter3
    }else{
      filterProducts = filter4
    }
    console.log(filterProducts)
    return filterProducts;
  }

  filterBy(event:string){
    this.products = this.filterProducts(event);
    this.productsService.setProducts(this.products)
  }

  

}
