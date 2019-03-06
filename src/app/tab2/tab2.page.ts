import { Component, OnInit } from '@angular/core';
import { Quotes } from 'src/assets/data/quotes.interface';
import quotes from 'src/assets/data/quotes';
import { AlertController } from '@ionic/angular';
import { QuotesService } from 'src/app/service/quotes.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  quoteCollection: {category: string, quotes: Quotes[], icon: string}[];
  constructor(
    private alertCtrl: AlertController,
    private quoteService: QuotesService
  ) {}
  ngOnInit() {
    this.quoteCollection = quotes;
  }
  async onAddFavorite(selectQuote: Quotes) {
    const alert = await this.alertCtrl.create({
      header: 'Add Quote',
      subHeader: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'Confirm',
          handler: () => {
            this.quoteService.addQuoteFavorite(selectQuote);
          }
        },
        {
          text: 'Not confirm',
          role: 'cancel',
          handler: () => {console.log('Cancelled'); },
        }
      ]
    });
    await alert.present();
  }
}
