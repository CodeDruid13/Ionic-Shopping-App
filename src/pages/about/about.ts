import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  user = {
    name: 'Obare Geoffrey',
    profileImage: 'assets/img/avatar.png',
    coverImage: 'assets/background/background.jpg',
    occupation: 'Software Engineer',
    location: 'Ongata Rongai, Nairobi',
    description: 'Focusing on developing mobile hybrid apps and graphic design.',
    address: 'BOx 40200-2044, Kisii, Kenya',
    phone: '+254 714 633 841',
    email: 'obaregeoffrey13@yahoo.com',
    whatsapp: '254 714 633 841',
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
