import { Injectable } from '@angular/core';
import { hogar } from '../data/hogar';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(hogar)

  getProducts(): BehaviorSubject<any[]>{
    return this.products;
  }

  setProducts(value: any[]){
    this.products.next(value)
  }


}
