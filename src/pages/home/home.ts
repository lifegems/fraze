import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Decks } from '../../app/data';
import { DeckComponent } from './deck.component';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public decks = [
    {
      title: "Haitian Creole",
      description: "Pawol yo pou koprann.",
      deck: Decks.Nimewo
    },
    {
      title: "Programming Terms",
      description: "Abstract meanings within an abstract environment.",
      deck: Decks.ProgrammingTerms
    },
    {
      title: "Bible Books",
      description: "Not including the apocrypha or pseudepograph.",
      deck: Decks.BibleBooks
    },
  ];

  constructor(public navCtrl: NavController) {

  }

  viewDeck(deck) {
    this.navCtrl.push(DeckComponent, {
      deck: deck
    })
  }

}
