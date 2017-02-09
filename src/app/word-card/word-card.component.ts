import { Component, OnInit, Input } from '@angular/core';
import { WordCard } from '../word-card';

@Component({
  selector: 'app-word-card',
  templateUrl: './word-card.component.html',
  styleUrls: ['./word-card.component.css']
})
export class WordCardComponent implements OnInit {
  
  @Input() card: WordCard;
  
  constructor() { }

  ngOnInit() {
  }

}
