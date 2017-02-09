import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  inverse: boolean;
  direction: string;
  constructor(){
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
