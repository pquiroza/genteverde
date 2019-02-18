import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewsPage } from '../news/news.page';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  detalleCard(){
    console.log("en detallecard")
    this.presentModal();
  }


async presentModal(){
  const modal = await this.modalController.create({
    component: NewsPage

  });
  return await modal.present()
}
}
