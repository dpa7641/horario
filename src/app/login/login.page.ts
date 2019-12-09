import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import * as firebase from 'firebase';

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

  loading: any;

  loginCambio: boolean;

  public user:User = new User();


  
 
  constructor(public navCtrl: NavController,  public fireauth: AngularFireAuth,private fb: Facebook,
    public loadingController: LoadingController,
    private router: Router
  ) {}
 
  ngOnInit() {
    this.loading = this.loadingController.create({
      message: 'Connecting ...'
    });
    
  }
  async presentLoading(loading) {
    await loading.present();
  }

  async login() {
    this.fireauth.auth.signInWithEmailAndPassword(
      this.user.email, 
      this.user.password).then(res => {
      if (res.user) {
        console.log(res.user);
        this.router.navigate(['/home/horario']);
      }
    })
    .catch(err => {
      console.log(`login failed ${err}`);
    });
  }

  
  
  registrar(){
    this.router.navigate(['/registrar']);
  }




  olvidar(){  
    this.loginCambio = !this.loginCambio
  }



  recover() {
    this.fireauth.auth.sendPasswordResetEmail(this.user.email)
      .then(data => {
        console.log(data);
        this.router.navigateByUrl('/login');
      })
      .catch(err => {
        console.log(` failed ${err}`);
      });
  }




  async facebook() {

    this.fb.login(['email'])
      .then((response: FacebookLoginResponse) => {
        this.onLoginSuccess(response);
        console.log(response.authResponse.accessToken);
      }).catch((error) => {
        console.log(error)
        alert('error:' + error) 
      });
  }
  onLoginSuccess(res: FacebookLoginResponse) {
    //const { token } = res;
    const credential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
    this.fireauth.auth.signInWithCredential(credential)
      .then((response) => {
        this.router.navigate(["/home/horario"]);
        this.loading.dismiss();
      })

  }
  onLoginError(err) {
    console.log(err);
  }
 
  


}
