import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WordCardComponent } from './word-card/word-card.component';
import { CardsService } from './cards.service';
import { AllCardsComponent } from './all-cards/all-cards.component';

import { AppRoutingModule }     from './app-routing/app-routing.module';
import { RandomCardsComponent } from './random-cards/random-cards.component';
import { SequentalCardsComponent } from './sequental-cards/sequental-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    WordCardComponent,
    AllCardsComponent,
    RandomCardsComponent,
    SequentalCardsComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
