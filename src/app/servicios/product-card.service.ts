import { Injectable } from '@angular/core';
import { hogar } from '../data/hogar';

@Injectable({
  providedIn: 'root'
})
export class ProductCardService {

  constructor() { }

  // product: any;

  product: any = hogar[0];

  getProduct(){

  }

  setproduct(){

  }


}
