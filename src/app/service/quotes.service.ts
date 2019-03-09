import { Injectable } from '@angular/core';
import { Quotes } from 'src/assets/data/quotes.interface';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  private favoriteQuotes: Quotes[] = [];
  constructor() { }
  addQuoteFavorite(quote: Quotes) {
    this.favoriteQuotes.push (quote);
    console.log(this.favoriteQuotes);
  }
  removeQuoteFromFavorite(quote: Quotes) {
    const position = this.favoriteQuotes.findIndex((quoteEl: Quotes) => {
      return quoteEl.id === quote.id;
    });
    this.favoriteQuotes.splice(position, 1);
  }
  getFavoriteQuote() {
    return this.favoriteQuotes.slice();
  }
  isQuoteFavorite(quote: Quotes) {
    return this.favoriteQuotes.find((quoteE1: Quotes) => {
      return quoteE1.id === quote.id;
    });
  }
}
