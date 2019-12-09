import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//implementaciones realizadas por mi

//coneccion con el servidor para login
import { IonicStorageModule, Storage } from '@ionic/storage';
//implementacion de lector de codigoQR
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
//login con facebook
import { Facebook } from '@ionic-native/facebook/ngx';
//pipes para filtros
import { PipesModule } from './pipes/pipes.module';
//rest api
import { HttpClientModule} from '@angular/common/http';
import {JwtModule, JWT_OPTIONS} from '@auth0/angular-jwt';


export function jwtOptionsFactory(storage){
  return{
    tokenGetter: () => {
      return storage.get('access_token');
    },
    whitelistedDomains: ['https://afternoon-refuge-46845.herokuapp.com/']
  }
}



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    IonicStorageModule.forRoot(),
    JwtModule.forRoot({
      jwtOptionsProvider:{
        provide: JWT_OPTIONS, useFactory: jwtOptionsFactory, deps: [Storage]
      }
    }),
    HttpClientModule,
    PipesModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BarcodeScanner,
    QRScanner,
    Facebook,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
