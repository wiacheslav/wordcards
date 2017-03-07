import { Injectable } from '@angular/core';
import { WordCard, CARDS } from './word-card';

@Injectable()
export class CardsService {
  cardsLen = CARDS.length;
  
  lastValues: number[];

  constructor() {
    this.lastValues = new Array();
    let f = this.cardsLen / 5;
    for (let i = 0; i < f; i++) {
      this.lastValues.push(-1);
    }
  }

  getAll(): Promise<WordCard[]> {
    return Promise.resolve(CARDS);
  }

  getRandom(): Promise<WordCard> {
    let index = this.getRandomIndex();
    return this.getByIndex(index);
  }

  getByIndex(index: number): Promise<WordCard> {
    return Promise.resolve(CARDS[index]);
  }

  getMaxValue(): Promise<number> {
    return Promise.resolve(CARDS.length);
  }

  isPresent(value: number): boolean {
    if (this.lastValues.indexOf(value) === -1) {
      this.lastValues.shift();
      this.lastValues.push(value);
      return false;
    }
    return true;
  }

  private getRandomIndex(): number {
    let newValue = -1;
    do {
      newValue = Math.floor(Math.random() * this.cardsLen);  
    } while(this.isPresent(newValue));
    return newValue;
  }

}
