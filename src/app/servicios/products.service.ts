import { Injectable } from '@angular/core';
import { hogar } from '../data/hogar';
import { BehaviorSubject, Observable, filter, map, of, toArray } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(hogar)

  getProducts(): any[]{
    return this.products.getValue();
  }

  setProducts(value: any[]){
    this.products.next(value)
  }


}
