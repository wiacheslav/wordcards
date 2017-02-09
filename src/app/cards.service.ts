import { Injectable } from '@angular/core';
import { WordCard, CARDS } from './word-card';

@Injectable()
export class CardsService {
  cardsLen = CARDS.length;
  
  lastValue: number = -1;

  constructor() { }

  getAll(): Promise<WordCard[]> {
    return Promise.resolve(CARDS);
  }

  getRandom(): Promise<WordCard> {
    let index = this.getRandomIndex();
    return Promise.resolve(CARDS[index]);
  }

  private getRandomIndex(): number {
    let newValue = -1;
    do {
      newValue = Math.floor(Math.random() * this.cardsLen);  
    } while(newValue == this.lastValue);
    this.lastValue = newValue;
    return newValue;
  }

}
