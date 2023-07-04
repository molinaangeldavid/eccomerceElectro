import { Component,Renderer2, ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss']
})
export class CompraComponent {

  cities: string[] = [
    "Antartida",
    "Buenos Aires",
    "Catamarca",
    "Cdad autonoma de Bs As",
    "Chaco",
    "Chubut",
    "Cordoba",
    "Corrientes",
    "Entre Ríos",
    "Formosa",
    "Islas Malvinas",
    "Islas del Atco Sur",
    "Jujuy",
    "La Pampa",
    "La Rioja",
    "Mendoza",
    "Misiones",
    "Neuquén",
    "Río Negro",
    "Salta",
    "San Juan",
    "San Luis",
    "Santa Cruz",
    "Santa Fe",
    "Santiago del Estero",
    "Tucumán"
  ]

  @ViewChild('creditcard') cc!: ElementRef;

  constructor(private renderer: Renderer2){
    this.name = "John Doe"
    this.cardnumber = "0123 4567 8910 1112" 
    this.expirationdate = "01/23"
    this.securitycode = 2839
  }

  name: any; 
  cardnumber: any
  expirationdate: any
  securitycode: any
  

  // nnOnInit(){
    
  // }

flippedCardFunction(elementComponent:any){
  const element = elementComponent;
  const elementClass = this.cc.nativeElement.classList
  if(elementClass[1] == undefined){
    this.renderer.addClass(element,"flipped")
  }else{
    this.renderer.removeClass(element,"flipped")
  }
}

flipCard(){
  this.flippedCardFunction(this.cc.nativeElement)
}
};
    


