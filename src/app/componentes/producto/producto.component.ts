import { Component,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCardService } from 'src/app/servicios/product-card.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {

  @Input() product: any;
  
  constructor(private productService: ProductCardService, private router: Router, private route: ActivatedRoute){
  }

  ngOnInit(){
  }

  goTo(){
    this.productService.setproduct(this.product)
    this.router.navigate(['../product', this.product.codigo],{relativeTo: this.route})
    
  }

}
