import { Component,EventEmitter,Input,Output } from '@angular/core';

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
export class ContainerProductsComponent {

  currentProductsShow: any = []

  @Input() products!: any[];

  ngOnInit(){
    this.currentProductsShow = this.products.slice(0,6);
  }

  first: number = 0;

  @Output() marcas: EventEmitter<string> = new EventEmitter<string>();

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
