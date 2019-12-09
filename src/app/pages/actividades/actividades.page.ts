import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
})
export class ActividadesPage implements OnInit {

  mostrarHorarios: boolean;//condicional de HTML al precionar el boton de adicionar un horario
  adicionarActividad: boolean;//condicional de HTML al precionar el boton de adicionar un horario
  


  constructor(private firebase: AngularFireDatabase) { }

  ngOnInit() {
    this.loadActividades()
  }

  publisher = '';
  segmentChanged(event){
    const valorSegmento = event.detail.value;
    if(valorSegmento == 'lunes' ){
      this.publisher = '';
    }
    this.publisher = valorSegmento;
  }

   //array de carga de los horarios
   allActividad = [];
   //cargar las actividades del horario
   loadActividades() {
     this.firebase.list('Actividad').snapshotChanges(['child_added']).subscribe(actions => {
       this.allActividad = [];
       actions.forEach(action => {
         this.allActividad.push({
           titleHorario: action.payload.exportVal().titleHorario,
           description: action.payload.exportVal().descripcion,
           dia: action.payload.exportVal().dia,
           startTime:  new Date(action.payload.exportVal().startTime),
           endTime: new Date(action.payload.exportVal().endTime),
         });
       });
     });
   }

   //boton de canbio entre los horarios y la pestaña de adicionar el horario
  mostrarFormHorario() {
    this.adicionarActividad = !this.adicionarActividad;
    this.newActivity = {
      dia:'',
      description:'',
      startTime: '',
      endTime: ''
    };
  }



   //adicionar actividades a los horarios
  newActivity = {
    dia:'',
    description:'',
    startTime: '',
    endTime: ''
  };
  cerrarActividad(){
    this.mostrarHorarios = !this.mostrarHorarios;
  }
  // adicionar actividad
  addActividad() {
    this.firebase.list('Actividad').push({
      //titleHorario: titleHorario,
      dia:  this.newActivity.dia,
      descripcion: this.newActivity.description,
      startTime: this.newActivity.startTime,
      endTime: this.newActivity.endTime
    });
    this.showHideFormActividad();
  }
  //formati de la forma de las actividades
  showHideFormActividad() {
    this.adicionarActividad = !this.adicionarActividad;
    this.newActivity = {
      dia:'',
      description:'',
      startTime:'',
      endTime: ''
    };
  }
}
