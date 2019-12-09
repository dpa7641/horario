import { Component, OnInit } from '@angular/core';
import {  NavController } from '@ionic/angular';

import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';




@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  mostrarActividades: boolean;//condicional de HTML al precionar el boton de adicionar un horario
  mostrarHorarios: boolean;//condicional de HTML al precionar el boton de adicionar un horario
  adicionarHorario: boolean;//condicional de HTML al precionar el boton de adicionar una actividad

  user: any = {}

  constructor(
    public navCtrl: NavController,
    private router: Router,
    private fireauth: AngularFireAuth
   ) { }

  ngOnInit() {
    this.fireauth.auth.onAuthStateChanged(user => {
      if (user) {
        this.user = {
          uid: user.uid,
          isAnonymous: user.isAnonymous,
          email: user.email,
          displayName: user.displayName,
          refreshToken: user.refreshToken
        }
      }
      else {
        this.router.navigate(["/"]);
      }
    })
  }


  async logout() {
    this.fireauth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    })
  }



  
 



}