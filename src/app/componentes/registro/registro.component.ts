import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
  
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  constructor(private router: Router){

  }

  exclamation = faExclamation;

  registerAccount: any = {
    username: undefined,
    password: undefined,
    email: undefined,
    fechaNacimiento: undefined,
  }

  patternEmail: any= /^[\w\.-]+@[\w-]+\.[a-zA-Z]{2,6}$/;

  confirmationFields: any = {
    emailConfirm: undefined,
    passwordConfirm: undefined
  }

  emailEqual: boolean = false;
  passwordEqual: boolean = false;

  allFields: boolean = true;

  valAllFields(): boolean{
    if(this.registerAccount.username === undefined){
      return false;
    }else{
      if(this.registerAccount.email === undefined){
        return false;
      }else{
        if(this.confirmationFields.emailConfirm === undefined){
          return false;
        }else{
          if(this.registerAccount.fechaNacimiento === undefined){
            return false;
          }else{
            if(this.registerAccount.password === undefined){
              return false;
            }else{
              if(this.confirmationFields.passwordConfirm === undefined){
                return false;
              }else{
                this.allFields = false;
                return true;
              }
            }
          }
        }
      }
    }
  }

  existAccount(): boolean{
    for(let i = 0; i < localStorage.length ; i++){
      if(localStorage.key(i) == this.registerAccount.username){
        return true;
      }
    }
    return false;
  }

  signUp(){
    if(this.valAllFields()){
      if(!this.existAccount()){
        localStorage.setItem(this.registerAccount.username,JSON.stringify(this.registerAccount))
        this.router.navigate(["/"])
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Usuario existente',
          text: 'Este usuario existe en nuestra base de datos',
          footer: '<a routerLink="ingreso">Ingresa con este usuario</a>'
        })
      }
    }
  }


}
