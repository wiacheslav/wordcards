import { Component, OnInit, Output } from '@angular/core';
import { CardsService } from '../cards.service';
import { WordCard, CARDS } from '../word-card';

@Component({
  selector: 'app-random-cards',
  templateUrl: './random-cards.component.html',
  styleUrls: ['./random-cards.component.css']
})
export class RandomCardsComponent implements OnInit {

  card: WordCard;
  constructor(private cardsService: CardsService) { }

  getNext() {
    this.cardsService.getRandom().then(card => this.card = card);
  }

  ngOnInit() {
    this.getNext();
  }

}
