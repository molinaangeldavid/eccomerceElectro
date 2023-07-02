import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/servicios/user-data.service';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.scss']
})
export class IngresoComponent {

  constructor(private router:Router,private userData: UserDataService){

  }

  messagesArray: Message[] = [
    { severity: 'error', summary: 'Error', detail: 'El usuario ingresado no existe' },
    { severity: 'error', summary: 'Error', detail: 'La contraseña ingresada es incorrecta' }
  ]

  messageUser: Message = this.messagesArray[0];

  exclamation = faExclamation;

  userAccount: any = {
    user: undefined,
    password: undefined
  }

  userUser: boolean = false;
  userPassword: boolean = false;

  logIn(){
    if(localStorage.length == 0){
      this.userUser = true;
    }else{
      for(let i=0; i<localStorage.length; i++) {
        if(this.userAccount.user == localStorage.key(i)){
          let data = JSON.parse(localStorage.getItem(this.userAccount.user)!)
          if(data.password == this.userAccount.password){
            this.userData.setUser(this.userAccount.user)
            this.router.navigate(['/home'])
          }else{
            this.userPassword = true
          }
        }else{
          this.userUser = true;
        }
        
      }
    }
  }

}
