import { Injectable } from '@angular/core';
import { WordCard, CARDS } from './word-card';

@Injectable()
export class CardsService {
  cardsLen = CARDS.length;

  constructor() { }

  getAll(): Promise<WordCard[]> {
    return Promise.resolve(CARDS);
  }

  getRandom(): Promise<WordCard> {
    let index = this.getRandomIndex();
    return Promise.resolve(CARDS[index]);
  }

  private getRandomIndex(): number {
    return Math.floor(Math.random() * this.cardsLen);
  }

}
