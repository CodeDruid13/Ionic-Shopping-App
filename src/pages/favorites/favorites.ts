import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  concerts = [
    {
      name: 'Favorito 1',
      artistName: 'Favorite 1',
      artistImage: 'assets/misc/offer1.jpg',
      color: '#f73e53'
    },
    {
      name: 'Favorit0 2',
      artistName: 'Favorite 2',
      artistImage: 'assets/misc/offer2.jpg',
      color: '#0be3ff'
    },
    {
      name: 'Favorit0 3',
      artistName: 'Favorite 3',
      artistImage: 'assets/misc/offer3.png',
      color: '#fdd427'
    },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

}
