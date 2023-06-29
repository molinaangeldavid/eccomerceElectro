import { Component } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent {
carritoProducto = [{
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
},]
  
eliminarProducto(product: any) {
  const index = this.carritoProducto.indexOf(product);
  if (index !== -1) {
      this.carritoProducto.splice(index, 1);
  }
}

}
