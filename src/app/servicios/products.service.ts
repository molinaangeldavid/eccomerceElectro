import { Injectable } from '@angular/core';
import { hogar } from '../data/hogar';
import { tecnologia } from '../data/tecnologia';
import { taller } from '../data/taller';
import { belleza } from '../data/belleza';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productsInit(){
    let array = []
    let randomArray = Math.round(Math.random() * 4);
      switch(randomArray){
        case 1: 
          array = hogar;
          break;
        case 2: 
          array = tecnologia;
          break;
        case 3: 
          array = belleza;
          break;
        default: 
          array = taller;
          break;
      }
    this.products = array
  }


  products!: any[];

  filterWord!: string;

  getProducts(){
    return this.products;
  }

  setProducts(newProds: any[]){
    this.products = newProds;
  }

  getFilterWord(){
    return this.filterWord;
  }

  setFilterproducts(value: string){
    let filterArray = [];
    let filter1 = hogar.filter(x => x.categoria === value);
    let filter2 = tecnologia.filter(x => x.categoria === value)
    let filter3 = belleza.filter(x => x.categoria === value)
    let filter4 = taller.filter(x => x.categoria === value)
    if(filter1.length != 0){
      filterArray = filter1;
    }else if(filter2.length != 0){
      filterArray = filter2;
    }else if(filter3.length != 0){
      filterArray = filter3
    }else{
      filterArray = filter4
    }
    this.products = filterArray;
  }

}
