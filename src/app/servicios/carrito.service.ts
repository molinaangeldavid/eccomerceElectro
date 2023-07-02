import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  productsCarrito: any[] = [];

  constructor() { }

  getProductsCarrito(){
    return this.productsCarrito;
  }

  setProductsCarrito(value: any){
    this.productsCarrito = value
  }

  addNewProduct(product: any){
    this.productsCarrito.push(product)
  }

}
