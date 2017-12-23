import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public decks = [
    {
      title: "Haitian Creole",
      description: "Pawol yo pou koprann."
    },
    {
      title: "Programming Terms",
      description: "Abstract meanings within an abstract environment."
    },
    {
      title: "Bible Books",
      description: "Not including the apocrypha or pseudepograph."
    },
  ];

  constructor(public navCtrl: NavController) {

  }

  test() {
    alert("test");
  }

}
