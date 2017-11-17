import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides } from 'ionic-angular';

import { OffersPage } from '../offers/offers';
import { SupportPage } from '../support/support';
import { FavoritesPage } from '../favorites/favorites';
import { SettingsPage } from '../settings/settings';
import { AboutPage } from '../about/about';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('slider') slider: Slides;
  slideIndex = 0;
  slides = [
    {
      title: 'Dream\'s Adventure',
      imageUrl: 'assets/img/lists/wishlist-1.jpg',
      description: 'Take a look at our amazing options',
    },
    {
      title: 'For the Weekend',
      imageUrl: 'assets/img/lists/wishlist-2.jpg',
      description: 'Take a look at our amazing options',
    },
    {
      title: 'Family Time',
      imageUrl: 'assets/img/lists/wishlist-3.jpg',
      description: 'Take a look at our amazing options',
    },
    {
      title: 'My Trip',
      imageUrl: 'assets/img/lists/wishlist-4.jpg',
      description: 'Take a look at our amazing options',
    }
  ];

  openMenu =false;

  constructor(public navCtrl: NavController) {}

  onSlideChanged() {
    this.slideIndex = this.slider.getActiveIndex();
    console.log('Slide changed! Current index is', this.slideIndex);
  }


  togglePopupMenu() {
    return this.openMenu = !this.openMenu;
  }


  goToHome() {}

  goToOffers() {
    this.navCtrl.push(OffersPage);
  }

  goToCart() {}

  goToOrders() {}

  goToFavorites(){
    this.navCtrl.push(FavoritesPage);
  }

  goToSettings(){
    this.navCtrl.push(SettingsPage);
  }

  goToSupport() {
    this.navCtrl.push(SupportPage);
  }

  goToAbout(){
    this.navCtrl.push(AboutPage);
  }

  goToLogin(){}
}
