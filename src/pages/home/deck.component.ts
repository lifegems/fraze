import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Decks } from '../../app/data';

@Component({
   template: `
<ion-header>
   <ion-navbar color="primary">
      <ion-title>Home</ion-title>
   </ion-navbar>
</ion-header>
<ion-content no-padding>
   <ion-slides>
      <ion-slide *ngFor="let card of deck">
         <ion-card (click)="card.showSideA = !card.showSideA" style="height: 80vh">
            <h2 style="padding-top: 5vh; color: gray">{{card.showSideA ? 'Side A' : 'Side B'}} (click to flip)</h2>
            <h3 style="height: 100%; padding-top: 10vh">{{card.showSideA ? card.sideA : card.sideB}}</h3>
         </ion-card>
      </ion-slide>
   </ion-slides>
</ion-content>
  `
})
export class DeckComponent {
   public deck: any[];

   constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.deck = this.navParams.get('deck');
      this.deck = this.deck.map(c => {
         c.showSideA = true;
         return c;
      })
   }


}
