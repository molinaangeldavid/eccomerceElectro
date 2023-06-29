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

  constructor(public productsService: ProductsService){
    this.productsService.getProducts().slice(0,3)
  }
  
  // currentProductsShow!: any[];
  
  ngOnInit(){
  }
  
  first: number = 0;
  
  ngOnChanges(changes: SimpleChanges): void {
    // this.productsService.setProducts(this.currentProductsShow)
    // console.log("f")
  }

  getProducts(){
    // this.productsService.getProducts().subscribe(
      //   x=> this.products = x
      // )
      // this.productsService.getProducts()
    }
    
    onPageChange(event: PageEvent){
    if(event.page == 0){
      this.productsService.getProducts().slice(0,3);
    }else{
      this.productsService.getProducts().slice(event.page*event.rows,(event.page + 1)*event.rows)
    }
    this.first = event.first;
  }







}
