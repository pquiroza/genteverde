import { Component, OnInit } from '@angular/core';
import {
  ToastController,
  Platform,
  LoadingController
} from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  ILatLng,
  GoogleMapsAnimation,
  MyLocation,
  BaseArrayClass
} from '@ionic-native/google-maps';





@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
  map: GoogleMap;
 loading: any;

  constructor( public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private platform: Platform) {


  }

  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.platform.ready();
    await this.loadMap();
  }


  async loadMap() {

    let POINTS: BaseArrayClass<any> = new BaseArrayClass<any>([
      {
        position: {lat:-33.412928,lng:-70.582746},
        title: "Confecciones Naturaleza Viva",
        iconData: "./assets/icons/vestipng.png"
      },
      {
        position: {lat:-33.415427,lng:-70.582413},
        title: "Punto de Reciclaje Cruz del Sur 200",
        iconData: "./assets/icons/residuosicon.png"
      },
      {
        position: {lat:-33.411513,lng:-70.577071},
        title: "Punto de Reciclaje Nueva Apoquindo",
        iconData: "./assets/icons/residuosicon.png"
      },
      {
        position: {lat:-33.413725,lng:-70.585385},
        title: "Restoran Veggie",
        iconData: "./assets/icons/alimentacionicon.png"
      },
      {
        position: {lat:-33.415275,lng:-70.581598},
        title: "Cafe Ecologico",
        iconData: "./assets/icons/alimentacionicon.png"
      }


    ]);

    let bounds: ILatLng[] = POINTS.map((data: any, idx: number) => {
   console.log(data);
   return data.position;
 });


  this.map = GoogleMaps.create('map_canvas', {
    setMyLocationEnabled:true,
    camera: {
      target: {
        lat: 43.0741704,
        lng: -89.3809802
      },
      zoom: 18,
      tilt: 30
    }
  });

  this.loading = await this.loadingCtrl.create({
    message: 'Please wait...'
  });
  await this.loading.present();
  this.map.getMyLocation().then((location: MyLocation) => {
    console.log(location)
    this.loading.dismiss();
    console.log(JSON.stringify(location, null ,2));

    // Move the map camera to the location with animation
    this.map.animateCamera({
      target: location.latLng,
      zoom: 17,
      tilt: 30
    });

    // add a marker



  })
  .catch(err => {
    this.loading.dismiss();
    this.showToast(err.error_message);
  });

  POINTS.forEach((data: any) => {
    data.disableAutoPan = true;
    let marker: Marker = this.map.addMarkerSync(data);
    let iconData: any = marker.get('iconData');
    marker.setIcon(iconData);
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(this.onMarkerClick);
    marker.on(GoogleMapsEvent.INFO_CLICK).subscribe(this.onMarkerClick);
  });




}

onMarkerClick(params: any) {
  let marker: Marker = <Marker>params[1];
  let iconData: any = marker.get('iconData');
  marker.setIcon(iconData);
}
async onButtonClick() {
  this.map.clear();

  this.loading = await this.loadingCtrl.create({
    message: 'Please wait...'
  });
  await this.loading.present();

  // Get the location of you
  this.map.getMyLocation().then((location: MyLocation) => {
    console.log(location)
    this.loading.dismiss();
    console.log(JSON.stringify(location, null ,2));

    // Move the map camera to the location with animation
    this.map.animateCamera({
      target: location.latLng,
      zoom: 17,
      tilt: 30
    });

    // add a marker
    let marker: Marker = this.map.addMarkerSync({
      title: '@ionic-native/google-maps plugin!',
      snippet: 'This plugin is awesome!',
      position: location.latLng,
      animation: GoogleMapsAnimation.BOUNCE
    });

    // show the infoWindow
    marker.showInfoWindow();

    // If clicked it, display the alert
    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      this.showToast('clicked!');
    });
  })
  .catch(err => {
    this.loading.dismiss();
    this.showToast(err.error_message);
  });
}


async showToast(message: string) {
  let toast = await this.toastCtrl.create({
    message: message,
    duration: 2000,
    position: 'middle'
  });

  toast.present();
}

}
