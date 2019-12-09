import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

@Component({
  selector: 'app-enviar',
  templateUrl: './enviar.page.html',
  styleUrls: ['./enviar.page.scss'],
})
export class EnviarPage implements OnInit {

  constructor(private barcodeScanner: BarcodeScanner,private qrScanner: QRScanner) { }

  ngOnInit() {
  }

  escanear(){
    var TextToEncode= window.prompt("ingrese los datos");
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE,TextToEncode).then((data) => {
      alert(JSON.stringify(data));
    },(err)=> {
    alert(JSON.stringify(err))
    })
  }
  
  camaraLeerBar(){
    this.barcodeScanner.scan().then((barcodeData) => {
      alert(JSON.stringify(barcodeData.text));
    },(err)=> {
    alert(JSON.stringify(err))
    })
  }
  camaraLeerQR(){
      this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
     if (status.authorized) {
       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
         console.log('Scanned something', text);
         this.qrScanner.hide(); 
         scanSub.unsubscribe(); 
       });
     } else if (status.denied) {} else {}}).catch((e: any) => console.log('Error is', e));
  }

}
