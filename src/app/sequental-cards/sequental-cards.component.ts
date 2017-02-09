import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';
import { WordCard } from '../word-card';

@Component({
  selector: 'app-sequental-cards',
  templateUrl: './sequental-cards.component.html',
  styleUrls: ['./sequental-cards.component.css']
})
export class SequentalCardsComponent implements OnInit {

  current: number = 0;
  maxValue: number = -1;
  card: WordCard;

  constructor(private cardsService: CardsService) {}

  ngOnInit() {
    this.cardsService.getMaxValue().then(max => this.maxValue = max - 1);
    this.updateCurrentCard();
  }

  updateCurrentCard(): void {
    this.cardsService.getByIndex(this.current).then(card => this.card = card);
  }

  getNext(): void {
    if (this.current < this.maxValue) {
      this.current++;
    }
    this.updateCurrentCard();
  }

  getPrevious(): void {
    if (this.current > 0) {
      this.current--;
    }
    this.updateCurrentCard();
  }

}
