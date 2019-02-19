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

  detalleCard(id){
    console.log("en detallecard")
    this.presentModal(id);
  }


async presentModal(id){
  console.log(id)
  const modal = await this.modalController.create({
    component: NewsPage,
    componentProps: { idNew: id}

  });
  return await modal.present()
}
}
