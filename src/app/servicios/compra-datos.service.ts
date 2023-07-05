import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompraDatosService {

  constructor() { }

  dataShop: any = {
    cantidad: undefined,
    precioTotal: undefined
  };

  getDataShop(){
    return this.dataShop
  }

  setDataShop(value: any){
    this.dataShop = value;
  }

  
}
