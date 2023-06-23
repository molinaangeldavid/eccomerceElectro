import { Component } from '@angular/core';
import { ProductCardService } from 'src/app/servicios/product-card.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {

  constructor(private productService: ProductCardService){

  }

  product: any;

  ngOnInit(){
    this.product = this.productService.getProduct()
  }


}
