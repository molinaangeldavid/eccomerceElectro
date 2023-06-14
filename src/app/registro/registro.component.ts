import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  usuario: any = {
    username: undefined,
    password: undefined,
    email: undefined,
    fechaNacimiento: undefined,
    localidad: undefined
  }

  acac: any

}
