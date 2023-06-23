import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products!: any[];

  getProducts(){
    return this.products;
  }

  setProducts(newProds: any[]){
    this.products = newProds;
  }




}
