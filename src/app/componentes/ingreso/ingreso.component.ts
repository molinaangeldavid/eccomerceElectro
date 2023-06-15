import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/servicios/user-data.service';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.scss']
})
export class IngresoComponent {

  constructor(private router:Router,private userData: UserDataService){

  }

  exclamation = faExclamation;

  userAccount: any = {
    user: undefined,
    password: undefined
  }

  userUser: boolean = false;
  userPassword: boolean = false;

  logIn(){
    for(let i=0; i<localStorage.length; i++) {
      if(this.userAccount.user == localStorage.key(i)){
        if(localStorage.getItem(this.userAccount.user) == this.userAccount.password){
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
