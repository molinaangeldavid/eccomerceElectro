import { Component } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
})

export class CarritoComponent {

  carritoProducts!: any[];

  totalProducts: number = 0;

  visible!: boolean;

  showDialog() {
    this.visible = true;
  }
  
  constructor(private carritoService: CarritoService,
    private router:Router,
    ){
  }
  
  ngOnInit(){
    this.carritoProducts = this.carritoService.getProductsCarts()
    for(let i of this.carritoProducts){
      this.totalProducts += i.precio;
    }
  }

  eliminarProducto(product: any) {
    const index = this.carritoProducts.indexOf(product);
    this.carritoProducts.splice(index, 1);
    this.carritoService.deleteOneToCart()
  }

  goToShopping(){
    this.router.navigate(['/home/products'])
  }

  goToConfirm(){
    this.router.navigate(["/home/compraFinal"])
  }

}
