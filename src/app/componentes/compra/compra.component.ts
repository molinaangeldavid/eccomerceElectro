import { Component,Renderer2, ElementRef,ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { CompraDatosService } from 'src/app/servicios/compra-datos.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.scss']
})
export class CompraComponent implements OnInit{
  
  shopInfo: any = {
    nombreCompleto: undefined,
    direccion: undefined,
    telefono: undefined,
    ciudad: undefined,
  }
  
  datosFromCarrito: any;

  
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
  
  constructor(private renderer: Renderer2, 
    private messageService: MessageService,
    private router: Router,
    private compraDatosService: CompraDatosService){
  }
  
  name: any; 
  cardnumber: any
  expirationdate: any
  securitycode: any
  
  
  onSelect(event:any){
    this.shopInfo.ciudad = event.target.value
    console.log(event.target.value)
  }
  
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

  ngOnInit(){
    this.datosFromCarrito = this.compraDatosService.getDataShop()
  }
  
  
  
  confirmarCompra(){
    
    if(this.shopInfo.nombreCompleto.length < 10 || this.shopInfo.direccion.length < 10 || this.shopInfo.telefono.length < 8){
      this.messageService.add({severity: 'error', summary: "Datos incompletos", detail:"No has ingresado todos los datos correspondientes"})
    }else{
      if(this.name.length < 10){
        this.messageService.add({severity: 'error', summary: "Datos incompletos", detail:"No has ingresado tu nombre de tarjeta correspondiente"})
      }else{
        if(this.cardnumber.length != 19 || !(/^\d{4}\s\d{4}\s\d{4}\s\{4}$/.test(this.cardnumber))){
          this.messageService.add({severity: 'error', summary: "Datos incompletos", detail:"No has ingresado el numero de tarjeta correspondiente"})
        }else{
          if(this.expirationdate.length != 5 || !(/^\d{2}\/\d{2}$/.test(this.expirationdate))){
            this.messageService.add({severity: 'error', summary: "Datos incompletos", detail:"No has ingresado una fecha de expiracion de la tarjeta valida"})
          }else{
            if(this.securitycode.length != 4 || (/^w{4}$/.test(this.securitycode))){
              this.messageService.add({severity: 'error', summary: "Datos incompletos", detail:"No has ingresado el codigo de tarjeta correspondiente"})
            }else{
              this.messageService.add({severity: 'sucess', summary: "Compra exitosa", detail:"Has realizado la compra exitosamente!"})
              setTimeout(() => {
                this.router.navigate(["/home/products"])
              }, 3000);
              Swal.fire(
                'Compra exitosa!',
                'Has realizado tu compra con exito!',
                'success'
              )
            } 
          }
        }
      }
      
    }
    
  }
}


