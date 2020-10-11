import { Component } from '@angular/core';


import { ModalController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from 'rxjs';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { LottieSplashScreen } from '@ionic-native/lottie-splash-screen/ngx';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  showSplash: boolean = true;
  caminoInicial: string = '../../assets/panteraRosa.mp3';
  jungle:any;
 
  

  constructor( private lottieSplashScreen: LottieSplashScreen, private nativeAudio: NativeAudio, private platform: Platform,  private splashScreen: SplashScreen, private statusBar: StatusBar) {
    this.iniciarlizarAudios();
    this.initializeApp();
  }


  async initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      setTimeout(() => {
        this.lottieSplashScreen.hide();  
      },3000)
     
      // timer(5000).subscribe(() => this.showSplash = false);    
    });
  }

  iniciarlizarAudios() {
    this.jungle = new Audio();
    this.jungle.src = this.caminoInicial;
    this.jungle.load();
    // this.jungle.play(); 
    // window.setTimeout(function () {   }, 10000);   
    
  }
}
