import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetalertService {

  sweetSuccess(title:string,description: string,type: any){
    Swal.fire(
      title,
      description,
      type
    )
  }
  
  creacionOficina(title:string,description: string,type:string){
    this.sweetSuccess(title,description,type);
  }

  editarOficina(title:string,description: string,type:string){
    this.sweetSuccess(title,description,type);
  }
  
  constructor() { }
}
