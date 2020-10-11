import { Component, OnInit } from '@angular/core';
import { storage } from 'firebase';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router'
import * as firebase from 'firebase';
import { AuthService } from '../servicios/auth.service';

@Component({
  selector: 'app-buenas',
  templateUrl: './buenas.page.html',
  styleUrls: ['./buenas.page.scss'],
})
export class BuenasPage implements OnInit {

  private usuarioActual: string = "";
  public mostrar = true;

  constructor(private camera: Camera, private router: Router, private authService: AuthService) { 
              this.usuarioActual = localStorage.getItem('usuarioActual');
  }


  ngOnInit() {
    this.usuarioActual = localStorage.getItem('usuarioActual');
    this.mostrar = false;
  }

  async sacarFoto() {

    const options: CameraOptions = {
      quality: 100,
      targetHeight: 600,
      targetWidth: 600,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.PictureSourceType.PHOTOLIBRARY,
      correctOrientation: true
    }

    try {
    
      let hora = Date.now();
      let ubicacion = "buenas/" + this.usuarioActual + "/" + hora;
      const result = await this.camera.getPicture(options);
      const image = `data:image/jpeg;base64,${result}`;
      const picture = storage().ref(ubicacion);
      picture.putString(image, 'data_url').then(()=>{
        this.guardarReferencia(ubicacion);
      });

    
    }
    catch (e) {
      console.log("dio un error dentro del catch");
      console.log(JSON.stringify(e.error.messagesRef));
    }
  }

  guardarReferencia(pReferencia: string): any {
    console.log(pReferencia);
    var storage = firebase.storage();
    var storageRef = storage.ref();
    var spaceRef = storageRef.child(pReferencia);

    spaceRef.getDownloadURL().then(url => {
      var messagesRef = firebase.database().ref().child("buenas");
      messagesRef.push({ carpeta: "buenas", usuario: this.usuarioActual, referencia: url });
    });
    return "";
  }

  async freno(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then(() => console.log("fired"));
  }

  salir()
  {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  verListadoFotosLindas () {
    this.router.navigate(['/galeria-buenas']);
  }

  verListadoMisFotosLindas() {
    this.router.navigate(['/galeria-mis-buenas']);
  }
  verGrafico() {
    this.router.navigate(['/grafico-buenas']);
  }

}
