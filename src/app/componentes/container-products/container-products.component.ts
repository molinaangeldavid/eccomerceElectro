import { Component,Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
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
export class ContainerProductsComponent implements OnInit, OnChanges{

  constructor(private productsService: ProductsService){

  }

  currentProductsShow: any = []

  @Input() products!: any[];

  ngOnInit(){
    this.currentProductsShow = this.products.slice(0,6);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.currentProductsShow = this.productsService.getProducts()
  }  

  first: number = 0;


  onPageChange(event: PageEvent){
    if(event.page == 0){
      this.currentProductsShow = this.products.slice(0,6);
    }else{
      this.currentProductsShow = this.products.slice(event.page*event.rows,(event.page + 1)*event.rows)
    }
    this.first = event.first;
    console.log("first: " + event.first)
    console.log("page:" +  event.page)
  }





}
