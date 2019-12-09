import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HorarioPage } from './horario.page';
import { NgCalendarModule  } from 'ionic2-calendar';
import { PipesModule  } from '../../pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: HorarioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgCalendarModule,
    PipesModule

  ],
  declarations: [HorarioPage]

})
export class HorarioPageModule {}
