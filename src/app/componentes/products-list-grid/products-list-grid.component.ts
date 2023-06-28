import { Component, OnChanges, OnInit,SimpleChanges } from '@angular/core';
import { hogar } from 'src/app/data/hogar';
import { tecnologia } from 'src/app/data/tecnologia';
import { belleza } from 'src/app/data/belleza';
import { taller } from 'src/app/data/taller';
import { ProductsService } from 'src/app/servicios/products.service';

@Component({
  selector: 'app-products-list-grid',
  templateUrl: './products-list-grid.component.html',
  styleUrls: ['./products-list-grid.component.scss']
})
export class ProductsListGridComponent implements OnInit, OnChanges{

  constructor(){}

  products!: any[];


  ngOnInit(){
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }


}
