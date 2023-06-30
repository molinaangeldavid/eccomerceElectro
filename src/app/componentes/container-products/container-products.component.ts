import { Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { ProductsService } from 'src/app/servicios/products.service';

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'app-container-products',
  templateUrl: './container-products.component.html',
  styleUrls: ['./container-products.component.scss']
})

export class ContainerProductsComponent implements OnInit,OnChanges{
  
  products!: any[]

  currentProductsShow!: any[];

  constructor(public productsService: ProductsService){
  }
  
  ngOnInit(){
    this.productsService.getProducts().subscribe(
      data => {
        this.products = data;
        this.currentProductsShow = this.products.slice(0,3)
      }
    )
  }
  
  first: number = 0;
  
  ngOnChanges(changes: SimpleChanges): void {
  }

  
    
  onPageChange(event: PageEvent){
    if(event.page == 0){
      this.currentProductsShow = this.products.slice(0,3);
    }else{
      this.currentProductsShow = this.products.slice(event.page*event.rows,(event.page + 1)*event.rows)
    }
    this.first = event.first;
  }







}
