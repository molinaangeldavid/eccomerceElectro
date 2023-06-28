import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductsService } from 'src/app/servicios/products.service';
import { hogar } from 'src/app/data/hogar';
import { tecnologia } from 'src/app/data/tecnologia';
import { belleza } from 'src/app/data/belleza';
import { taller } from 'src/app/data/taller';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnChanges{


  constructor(private productsService:ProductsService){
  }

  products!: any[];

  ngOnInit(){
    
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
