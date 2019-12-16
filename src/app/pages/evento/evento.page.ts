

import { Component, ViewChild, OnInit,Inject, LOCALE_ID  } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';

import { AngularFireDatabase } from '@angular/fire/database';

import { AlertController } from '@ionic/angular';
import { formatDate } from '@angular/common';
import * as firebase from 'firebase';




@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

  currentDate = new Date();
  currentMonth: string;
  minDate = new Date().toISOString();
  allEventos = [];
  showAddEvent: boolean;

  constructor(@Inject(LOCALE_ID) private locale: string,
    private alertCtrl: AlertController,
    private firebase: AngularFireDatabase) { }

  ngOnInit() {
    const user2 = firebase.auth().currentUser.providerData[0];
    const correoUsuario = user2.uid;
    this.loadEvent(correoUsuario);
  }
  @ViewChild(CalendarComponent, {static: false}) myCalendar: CalendarComponent;

  newEvent = {
    title: '',
    description: '',
    startTime: '',
    endTime: ''
  };

  onViewTitleChanged(title: string) {
    this.currentMonth = title;
  }
  onTimeSelected(ev: any) {
    const selected = new Date(ev.selectedTime);
    this.newEvent.startTime = selected.toISOString();
    selected.setHours(selected.getHours() + 1);
    this.newEvent.endTime = (selected.toISOString());
  }

  showHideForm() {
    this.showAddEvent = !this.showAddEvent;
    this.newEvent = {
      title: '',
      description: '',
      startTime: new Date().toISOString(),
      endTime: new Date().toISOString()
    };
  }

  addEvent() {
    const user = firebase.auth().currentUser.providerData[0];
    this.firebase.list('Evento').push({
      usuario: user.uid,
      title: this.newEvent.title,
      startTime:  this.newEvent.startTime,
      endTime: this.newEvent.endTime,
      description: this.newEvent.description
    });
    this.showHideForm();
  }
  
  loadEvent(data: String) {
    this.firebase.list('Evento').snapshotChanges(['child_added']).subscribe(actions => {
      this.allEventos = [];
      actions.filter(action => action.payload.exportVal().usuario == data).
      forEach(action => {
        this.allEventos.push({
          
          title: action.payload.exportVal().title,
          startTime:  new Date(action.payload.exportVal().startTime),
          endTime: new Date(action.payload.exportVal().endTime),
          description: action.payload.exportVal().description,
        });
        this.myCalendar.loadEvents();
      });
    });
  }



  async onEventSelected(event: any) {
    // Use Angular date pipe for conversion
    let start = formatDate(event.startTime, 'medium', this.locale);
    let end = formatDate(event.endTime, 'medium', this.locale);
   
    const alert = await this.alertCtrl.create({
      header: event.title,
      subHeader: event.desc,
      message:'Desde: <br>' + start + '<br><br>' + 'Hasta: <br>' + end,
      buttons: ['OK']
    });
    alert.present();
  }

}