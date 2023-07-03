import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  user: any;

  getUser(){
    return this.user
  }

  setUser(value: any){
    this.user = value
  }

}
