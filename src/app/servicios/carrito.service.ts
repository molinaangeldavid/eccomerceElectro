import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  productsCart: any[] = [];

  constructor() { }

  numberOfProducts: BehaviorSubject<number> = new BehaviorSubject<number>(0)

  getProductsCarts(){
    return this.productsCart;
  }

  setProductsCarts(value: any){
    this.productsCart = value
  }

  addNewProduct(product: any){
    this.productsCart.push(product)
  }

  getNumberProducts(){
    return this.numberOfProducts;
  }

  countOneToCart(){
    this.numberOfProducts.next(this.numberOfProducts.getValue() + 1)
  }

  deleteOneToCart(){
    this.numberOfProducts.next(this.numberOfProducts.getValue() - 1)
  }

}
