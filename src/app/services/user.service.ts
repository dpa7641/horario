import { Injectable } from '@angular/core';

Injectable({
  providedIn: 'root'
})

interface user {
  email: string,
  uid: string
}

export class UserService {

  private user:user

  constructor() { }

  setUser(user:user){
    this.user = user;
  }

  getUid(){
    return this.user.uid;
  }
}
