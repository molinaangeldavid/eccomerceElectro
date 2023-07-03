import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  user: string | undefined;

  showUserAccount: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  getUser(){
    return this.user
  }

  setUser(value: string){
    this.user = value
  }

  getUserAccountDisplay(){
    return this.showUserAccount
  }

  setUserDisplayAccount(){
    this.showUserAccount.next(false)
  }
}
