import { Injectable } from '@angular/core';
import { WordCard, CARDS } from './word-card';

@Injectable()
export class CardsService {

  constructor() { }

  getAll(): Promise<WordCard[]> {
    return Promise.resolve(CARDS);
  }

}
