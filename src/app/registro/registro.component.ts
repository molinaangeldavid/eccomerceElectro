import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {

  registerAccount: any = {
    username: undefined,
    password: undefined,
    email: undefined,
    fechaNacimiento: undefined,
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
    if(!this.existAccount()){
      localStorage.setItem(this.registerAccount.username,JSON.stringify(this.registerAccount))
    }
  }


}
