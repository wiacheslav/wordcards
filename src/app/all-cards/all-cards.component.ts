import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';
import { WordCard } from '../word-card';

@Component({
  selector: 'app-all-cards',
  templateUrl: './all-cards.component.html',
  styleUrls: ['./all-cards.component.css']
})
export class AllCardsComponent implements OnInit {
  cards: WordCard[];

  constructor(private cardsService: CardsService) { }

  getCards() {
    this.cardsService.getAll().then(cards => this.cards = cards);
  }

  ngOnInit() {
    this.getCards();
  }

}
