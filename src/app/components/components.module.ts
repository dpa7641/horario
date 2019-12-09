import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SlidesComponent } from './slides/slides.component';
import { LogotipoComponent } from './logotipo/logotipo.component';



@NgModule({
  declarations: [SlidesComponent,LogotipoComponent],
  exports:  [SlidesComponent,LogotipoComponent],
  imports: [CommonModule, FormsModule, IonicModule]
})

export class ComponentsModule { }




