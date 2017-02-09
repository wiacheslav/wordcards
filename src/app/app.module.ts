import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WordCardComponent } from './word-card/word-card.component';
import { CardsService } from './cards.service';
import { AllCardsComponent } from './all-cards/all-cards.component';

import { AppRoutingModule }     from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    WordCardComponent,
    AllCardsComponent    
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
