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
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
//implementacion de lector de codigoQR
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
//login con facebook
import { Facebook } from '@ionic-native/facebook/ngx';
//firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from 'angularfire2/auth'
//pipes para filtros
import { PipesModule } from './pipes/pipes.module';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    PipesModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    BarcodeScanner,
    QRScanner,
    Facebook,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
