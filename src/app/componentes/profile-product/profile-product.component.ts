import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductCardService } from 'src/app/servicios/product-card.service';
import { Location } from '@angular/common';
import { hogar } from 'src/app/data/hogar';

@Component({
  selector: 'app-profile-product',
  templateUrl: './profile-product.component.html',
  styleUrls: ['./profile-product.component.scss']
})
export class ProfileProductComponent {

  id: any;

  constructor(private route: ActivatedRoute, private productCardService: ProductCardService, private _location: Location){
    this.id = this.route.snapshot.paramMap.get('id');
  }

  subdescripcion!: string;

  byCategory(){
    switch(this.product.categoria){
      case 'aspiradoras':
        this.subdescripcion = "Color: " + this.product.color + "\nPeso: " + this.product.peso + "\nCapacidad: " + this.product.capacidad + "\nMarca: " + this.product.marca + "\nIncluye accesorios: " + this.product.accesorios ? "Si" : "No"
        break;
      case 'neveras':
        this.subdescripcion = "Altura: " + this.product.altura + "\nEficiencia energetica: " + this.product.eficiencia + "\nPeso: " + this.product.peso + "\nCapacidad: " + this.product.capacidad + "\nMarca: "+ this.product.marca + "\nIncluye accesorios: " + this.product.freezer ? "Si" : "No"
        break;
      case 'hornos & cocinas':
        this.subdescripcion = "Altura: " + this.product.altura + "\nEficiencia energetica: " + this.product.eficiencia + "\nPeso: " + this.product.peso + "\nCapacidad: " + this.product.capacidad + "\nMarca: "+ this.product.marca + "\nIncluye accesorios: " + this.product.freezer ? "Si" : "No"
    }
  }
  
  product!: any;

  ngOnInit(){
    this.product = this.productCardService.getProduct()
    
  }

  backTo(){
    this._location.back()
  }



}
