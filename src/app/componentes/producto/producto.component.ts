import { Component,Input } from '@angular/core';
import { ProductCardService } from 'src/app/servicios/product-card.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {

  @Input() product: any;
  
  constructor(private productService: ProductCardService){
    this.product = this.productService.getProduct()
  }

  ngOnInit(){
  }


}
