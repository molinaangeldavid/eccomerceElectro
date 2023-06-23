import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-container-products',
  templateUrl: './container-products.component.html',
  styleUrls: ['./container-products.component.scss']
})
export class ContainerProductsComponent {

  @Input() products!: any[];

  



}
