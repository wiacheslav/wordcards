import { Component, OnInit } from '@angular/core';
import { Router, RouterState  } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  inverse: boolean;
  direction: string;
  routerState: RouterState;
  constructor(router: Router){
    this.inverse = false;
    this.routerState = router.routerState;
  }

  toggle(): void {
    this.inverse = !this.inverse;
    this.direction = this.inverse ? 'Ru -> En' : 'En -> Ru';
    console.log(this.routerState);
  }

  ngOnInit() {
    this.direction = this.inverse ? 'Ru -> En' : 'En -> Ru';
  }
}
