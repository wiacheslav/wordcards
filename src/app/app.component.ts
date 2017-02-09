import { Component, OnInit } from '@angular/core';
import { WordCard } from './word-card';
import { CardsService } from './cards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cards: WordCard;
  inverse: boolean;
  direction: string;
  constructor(private cardService: CardsService){
    this.inverse = false;
  }

  toggle(): void {
    this.inverse = !this.inverse;
    this.direction = this.inverse ? 'Ru -> En' : 'En -> Ru';
  }

  ngOnInit() {
    this.direction = this.inverse ? 'Ru -> En' : 'En -> Ru';
  }
}
