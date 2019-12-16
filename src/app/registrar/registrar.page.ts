import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular'; 
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from "../services/auth.service";

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
     public fAuth: AngularFireAuth,
     private auth : AuthService){}



  ngOnInit() {
  }

  async register() {
    if(this.user.password == this.user.cpassword){
      this.auth.register(this.user.email, this.user.password,this.user.username).then( auth => {
        this.router.navigate(['/login'])
      }).catch(err => console.log(err));
      
    }else{
      console.log("error de contraseña repetida");
    }
    
  }

  login(){
    this.router.navigate(['/login']);
  }

}
  




