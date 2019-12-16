import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular'; 
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

export class User {
  email: string;
  username: string;
  password: string;
  cpassword: string;
}

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  public user:User = new User();

  constructor(
    private router: Router,
    public navCtrl: NavController,
     public fAuth: AngularFireAuth){}



  ngOnInit() {
  }

  async register() {
    if(this.user.password !== this.user.cpassword){
      console.log("error de contraseña");
    }
    try {
      var res = await this.fAuth.auth.createUserWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      if (res) {
        console.log("Successfully registered!");
        this.router.navigate(['/login']);
      }
    } catch (err) {
      console.error(err);
    }
  }

  login(){
    this.router.navigate(['/login']);
  }

}
  




