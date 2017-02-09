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
  constructor(private cardService: CardsService){}

  ngOnInit() {
    console.log(this.cardService);
  }
}
