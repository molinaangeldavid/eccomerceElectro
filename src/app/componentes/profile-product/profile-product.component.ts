import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCardService } from 'src/app/servicios/product-card.service';
import { Location } from '@angular/common';
import { UserDataService } from 'src/app/servicios/user-data.service';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-profile-product',
  templateUrl: './profile-product.component.html',
  styleUrls: ['./profile-product.component.scss'],
  providers:[MessageService]
})
export class ProfileProductComponent {

  id: any;

  constructor(
    private route: ActivatedRoute, 
    private productCardService: ProductCardService, 
    private _location: Location,
    private router:Router,
    private userDataService: UserDataService,
    private carritoService: CarritoService,
    private messageService: MessageService){
    this.id = this.route.snapshot.paramMap.get('id');
  }

  subdescripcion!: string;

  byCategory(){
    
    let subdescripcion = ""
    switch(this.product.categoria){
      case 'aspiradoras':
        subdescripcion = "<p><p>Color: " + this.product.color + "</p><p>Peso: " + this.product.peso + "Kgs</p><p>Capacidad: " + this.product.capacidad + "Lts</p><p>Marca: " + this.product.marca + "</p><p>Incluye accesorios: " + (this.product.accesorios ? "si" : "No") + "</p>"
        break;
      case 'neveras':
        subdescripcion = "<p><p>Altura: " + this.product.altura + "Mms</p><p>Eficiencia energetica: " + this.product.eficiencia + "</p><p>Peso: " + this.product.peso + "Kgs</p><p>Capacidad: " + this.product.capacidad + "Lts</p><p>Marca: "+ this.product.marca + "</p><p>Tiene Freezer: " + (this.product.freezer ? "Si" : "No")  + "</p>";
        break;
      case 'hornos & cocinas':
        subdescripcion = "<p><p>Altura: " + this.product.altura + "Mms</p>Eficiencia energetica: " + this.product.eficiencia + "</p><p>Peso: " + this.product.peso + "Kgs</p><p>Capacidad: " + this.product.capacidad + "Lts<\p><p>Marca: "+ this.product.marca + "<\p><p>Es electrico: " + (this.product.electrico ? "Si" : "No") + "<\p><p>Es a gas: " + (this.product.gas ? "Si" : "No")  + "</p>";
        break;
      case 'termotanques':
        subdescripcion = "<p>Altura: " + this.product.altura + "Mms<\p><p>Eficiencia energetica: " + this.product.eficiencia + "<\p><p>Peso: " + this.product.peso + "Kgs<\p><p>Capacidad: " + this.product.capacidad + "Lts<\p><p>Marca: "+ this.product.marca + "<\p><p>Es electrico: " + (this.product.electrico ? "Si" : "No") + "<\p><p>Es a gas: " + (this.product.gas ? "Si" : "No") +  + "</p>"
        break;
      case 'calefactores':
        subdescripcion = "<p>Altura: " + this.product.altura + "Mms<\p><p>Eficiencia energetica: " + this.product.eficiencia + "<\p><p>Peso: " + this.product.peso +  "Kgs<\p><p>Marca: "+ this.product.marca + "<\p><p>Es electrico: " + (this.product.electrico ? "Si" : "No") + "<\p><p>Es a gas: " + (this.product.gas ? "Si" : "No")  + "</p>";
        break;
      case 'aire acondicionado':
        subdescripcion = "<p>Ancho: " + this.product.ancho + "Mms<\p><p>Eficiencia energetica: " + this.product.eficiencia + "<\p><p>Peso: " + this.product.peso +  "<\p><p>Marca: "+ this.product.marca  + "</p>";
        break;
      case 'microondas':
        subdescripcion = "<p>Ancho: " + this.product.ancho + "Mms<\p><p>Eficiencia energetica: " + this.product.eficiencia + "<\p><p>Peso: " + this.product.peso +  "<\p><p>Marca: "+ this.product.marca + "<\p><p>Es digital: " + (this.product.digital ? "Si" : "No") + "</p>"
        break;
      case 'ventiladores':
        subdescripcion = "<p>Eficiencia energetica: " + this.product.eficiencia +  "<\p><p>Marca: "+ this.product.marca + "<\p><p>Es para techo: " + (this.product.techo ? "Si" : "No") + "</p>"
        break;
      case 'planchas':
        subdescripcion = "<p>Eficiencia energetica: " + this.product.eficiencia +  "<\p><p>Marca: "+ this.product.marca + "<\p><p>Tipo de plancha: " + this.product.tipo  + "</p>";
        break;
      case 'licuadoras':
        subdescripcion = "<p>Eficiencia energetica: " + this.product.eficiencia + "<\p><p>Capacidad: " + this.product.capacidad + "Lts<\p><p>Marca: "+ this.product.marca + "<\p><p>Cantidad de velocidades: " + this.product.velocidades + "<\p><p>Puede picar hielo: " + (this.product.picaHielo ? "Si" : "No") + "</p>"
        break;
      case 'pavas electricas & cafeteras':
        subdescripcion = "<p>Eficiencia energetica: " + this.product.eficiencia + "<\p><p>Marca: "+ this.product.marca + "<\p>";
        break;
      case 'televisores':
        subdescripcion = "<p>Marca: " + this.product.marca + "<\p><p>Es smart: "+ (this.product.smart ? "Si" : "No") + "<\p><p>Resolucion: " + this.product.resolucion + "</p><p>Tamaño de la pantalla: " + this.product.tamanio; + "\"\"</p>";
        break;
      case 'smartphones':
        subdescripcion = "<p>Marca: " + this.product.marca + "<\p><p>Modelo: "+ this.product.modelo + "<\p><p>Capacidad: " + this.product.capacidad + "Gbs</p><p>RAM: " + this.product.ram + "GB</p><p>Color: " + this.product.color + "<\p><p>Tiene NFC: "+ (this.product.nfc ? "Si" : "No") + "<\p><p>Camara principal: " + this.product.camaraPrincipal + "MB</p><p>Camara trasera: " + this.product.camaraTrasera  + "MB</p><p>Sistema operativo: " + this.product.so + "<\p><p>NUmeros de nucleos: "+ this.product.nucleos + "<\p><p>Tamaño pantalla: " + this.product.pantalla + `\'\'</p><a href=${this.product.link}>Entra aqui para saber mas..</a>`;
        break;
      case 'equipos de musica':
        subdescripcion = "<p>Marca: " + this.product.marca + "<\p><p>Es inalambrico: "+ (this.product.inalambrico ? "Si" : "No") + "<\p><p>Numero de parlantes: " + (this.product.parlantes ? "Si" : "No") + "</p>" + "</p><p>Tiene luces: " + (this.product.luces ? "Si" : "No"); + "</p>";
        break;
      case 'computadoras':
        subdescripcion = "<p>Marca procesador: " + this.product.marca + "<\p><p>Capacidad de disco: "+ this.product.capacidad + "GB<\p><p>RAM: " + this.product.ram + "GB</p>" + "</p><p>Grafico incorporado: " + this.product.grafico + "</p>";
        break;
      case 'consolas de videojuego':
        subdescripcion = "<p>Marca: " + this.product.marca + "<\p><p>Capacidad de disco: "+ this.product.capacidad + "GB<\p><p>RAM: " + this.product.ram + "GB</p>" + "</p><p>Con juegos de regalo: " + (this.product.conJuegos ? "Si" : "No") + "</p><p>Incluye controles: " + (this.product.controles ? "Si" : "No") + "</p>";
        break;
      case "secadores":
        subdescripcion = "<p>Marca: " + this.product.marca + "</p><p>Velocidades: " + this.product.velocidad + "</p>";
        break;
      case 'depiladoras':
        subdescripcion = "<p>Marca: " + this.product.marca + "</p><p>Color: " + this.product.color +"</p><p>Velocidades: " + this.product.velocidad + "</p>";
        break;
      case 'cortacesped':
        subdescripcion = "<p>Marca: " + this.product.marca + "</p>";
        break;
      case 'motosierra':
        subdescripcion = "<p>Marca: " + this.product.marca + "</p>";
        break;
      case 'sopladora':
        subdescripcion = "<p>Marca: " + this.product.marca + "</p>";
        break;
    }
      this.subdescripcion = subdescripcion;
  }
  
  product!: any;

  ngOnInit(){
    this.product = this.productCardService.getProduct()
    this.byCategory();
  }

  backTo(){
    this._location.back()
  }

  addCash(){
    if(this.userDataService.getUser() != undefined){
      this.carritoService.addNewProduct(this.product)
      this.messageService.add({ severity: 'success', summary: 'Agregado exitosamente', detail: 'Tu compra fue agregado exitosamente al carrito' });
    }else{
      this.router.navigate(['/ingreso'])
    }
  }



}
