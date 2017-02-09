import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCardsComponent } from '../all-cards/all-cards.component';
import { RandomCardsComponent } from '../random-cards/random-cards.component';
import { SequentalCardsComponent } from '../sequental-cards/sequental-cards.component';

const routes: Routes = [
  { path: '', redirectTo: '/all', pathMatch: 'full'},
  { path: 'all', component: AllCardsComponent},
  { path: 'sequentially', component: SequentalCardsComponent},
  { path: 'randomly', component: RandomCardsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
