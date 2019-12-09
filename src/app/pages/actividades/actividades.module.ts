import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ActividadesPage } from './actividades.page';
import { PipesModule} from '../../pipes/pipes.module';

const routes: Routes = [
  {
    path: '',
    component: ActividadesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ActividadesPage]
})
export class ActividadesPageModule {}
