import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';




const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children:[
        {path:'horario',
        loadChildren:() => import ('../pages/horario/horario.module').then(m => m.HorarioPageModule)},
        {path:'eventos',
        loadChildren:() => import ('../pages/evento/evento.module').then(m => m.EventoPageModule)},
        {path:'enviar',
        loadChildren:() => import ('../pages/enviar/enviar.module').then(m => m.EnviarPageModule)},
        {path:'settings',
        loadChildren:() => import ('../pages/settings/settings.module').then(m => m.SettingsPageModule)},
        //importaciones dentro de los tabs
        {path:'actividades',
        loadChildren:() => import ('../pages/actividades/actividades.module').then(m => m.ActividadesPageModule)}
    ]
}];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomeRouter{

}

