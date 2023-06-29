import { Component } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent {

  carritoProducts!: any[];
  
  constructor(private carritoService: CarritoService){
  }
  
  ngOnInit(){
    this.carritoProducts = this.carritoService.getProductsCarrito()
  }

  eliminarProducto(product: any) {
  const index = this.carritoProducts.indexOf(product);
  if (index !== -1) {
      this.carritoProducts.splice(index, 1);
  }
}

}
