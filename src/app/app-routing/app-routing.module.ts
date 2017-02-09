import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCardsComponent } from '../all-cards/all-cards.component';

const routes: Routes = [
  { path: '', redirectTo: '/all', pathMatch: 'full'},
  { path: 'all', component: AllCardsComponent},
  { path: 'sequentially', component: AllCardsComponent},
  { path: 'randomly', component: AllCardsComponent}
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
