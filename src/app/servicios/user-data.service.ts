import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }

  user: string | undefined;

  getUser(){
    return this.user
  }

  setUser(value: string){
    this.user = value
  }
}
