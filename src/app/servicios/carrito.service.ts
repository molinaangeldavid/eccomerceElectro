import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  productsCarrito: any[] = [
    {
      codigo: 1004,
      categoria: "aspiradoras",
      nombre: "Aspiradora Trineo Samsung VC20CCNMA 1.5L",
      descripcion: "Aspiradora modelo trineo marca Samsung con 1.5L de capacidad, 6 mts de cable y accesorios incluidos para mejorar tu limpieza hogareña",
      descripcionCorta: "Aspiradora modelo trineo marca Samsung con 1.5L de capacidad, 6 mts de cable y accesorios incluidos para mejorar tu limpieza hogareña",
      imagen: "../assets/aspiradora-Trineo-Samsung.webp",
      color: "rojo",
      peso: 4.5,
      capacidad: 1.5,
      marca: "Samsung",
      precio: 76.874,
      accesorios: false
  },
  {
      codigo: 1005,
      categoria: "aspiradoras",
      nombre: "Aspiradora Trineo Ultracomb AS-4201 2L",
      descripcion: "Aspiradora modelo trineo marca Ultracomb con 2L de capacidad, 4.5 mts de cable y accesorios incluidos para mejorar tu limpieza hogareña",
      descripcionCorta: "Aspiradora modelo trineo marca Ultracomb con 2L de capacidad, 4.5 mts de cable y accesorios incluidos para mejorar tu limpieza hogareña",
      imagen: "../assets/aspiradora-Trineo-Ultracomb.webp",
      color: "rojo",
      peso: 3,
      capacidad: 2,
      marca: "Ultracomb",
      precio: 31.699,
      accesorios: false
  }
  ];

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
