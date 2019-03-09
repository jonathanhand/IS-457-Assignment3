import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-quotedetail',
  templateUrl: './quotedetail.page.html',
  styleUrls: ['./quotedetail.page.scss'],
})
export class QuotedetailPage implements OnInit {
  person: string;
  text: string;
  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams) { }
  ionViewDidLoad() {
    this.person = this.navParams.get('item');
    this.text = this.navParams.get('desc');
  }
  onClose(remove = false) {
    this.modalCtrl.dismiss(remove);
  }
  ngOnInit() {
  }

}
