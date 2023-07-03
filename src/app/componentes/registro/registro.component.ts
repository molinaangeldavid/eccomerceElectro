import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { MessageService } from 'primeng/api';
  
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
  providers: [MessageService]
})
export class RegistroComponent {

  constructor(private router: Router,private messageService: MessageService){

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

  // emailEqual: boolean = false;
  // passwordEqual: boolean = false;

  allFields: boolean = false;

  valAllFields(): boolean{
    if(this.registerAccount.username === undefined || this.registerAccount.username.length < 6){
      this.allFields = true;
      return false;
    }else{
      if(this.registerAccount.email === undefined || !this.patternEmail.test(this.registerAccount.email)){
        return false;
      }else{
        if(this.confirmationFields.emailConfirm === undefined || this.confirmationFields.emailConfirm != this.registerAccount.email){
          this.allFields = true;
          return false;
        }else{
          if(this.registerAccount.fechaNacimiento === undefined){
            this.allFields = true;
            return false;
          }else{
            if(this.registerAccount.password === undefined || this.registerAccount.password.length < 8){
              this.allFields = true;
              return false;
            }else{
              if(this.confirmationFields.passwordConfirm === undefined || this.confirmationFields.passwordConfirm != this.registerAccount.password){
                this.allFields = true;
                return false;
              }else{
                this.allFields = false
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
        localStorage.setItem(this.registerAccount.username,JSON.stringify(this.registerAccount));
        this.messageService.add({severity: 'sucess', summary: 'Registro exitoso', detail: 'Se ha registrado exitosamente'})
        this.router.navigate(["/"])
      }
    }
  }


}
