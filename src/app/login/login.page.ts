import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
//import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

import { AuthService } from '../services/auth.service';

export class User {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  public user:User = new User();
  //cambio en html
  loginCambio: boolean;

 
  constructor(public navCtrl: NavController,
    //private fb: Facebook,
    private auth: AuthService,
    public loadingController: LoadingController,
    private router: Router
  ) {}
 
  ngOnInit() {}

  credentials = {
    email: this.user.email,
    pw: this.user.password
  };
  async login() {
    this.auth.login(this.credentials).subscribe(async res => {
      if (res) {
        this.router.navigateByUrl('home/horario');
      } else {
        console.log("error de api");
      }
    });
  }
  

  
  
  registrar(){
    this.router.navigate(['/registrar']);
  }




  olvidar(){  
    this.loginCambio = !this.loginCambio;
  }


}
