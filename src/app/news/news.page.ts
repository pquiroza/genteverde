import { Component, OnInit } from '@angular/core';
import { NavController,ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  idNew: any;
  new: any;
  constructor(private nav:NavController,private modalCtrl:ModalController, private navParams: NavParams) {
    this.idNew = this.navParams.get("idNew");
    console.log(this.idNew);

    if (this.idNew==1){
      this.new="n1"
    }
    else{
      this.new="n2"
    }
  }

  ngOnInit() {
  }

  back(){
    this.modalCtrl.dismiss();
  }

}
