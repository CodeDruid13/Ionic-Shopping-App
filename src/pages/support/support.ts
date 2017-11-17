import { Component } from '@angular/core';
import { ViewController, IonicPage } from 'ionic-angular';

/**
 * Generated class for the SupportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-support',
  templateUrl: 'support.html',
})
export class SupportPage {

  slides = [
    {
      title: 'Instruction One',
      imageUrl: 'assets/img/slides/square.png',
      instructions: 1,
    },
    {
      title: 'Instruction two',
      imageUrl: 'assets/img/slides/square-2.jpg',
      instructions: 2,
    },
    {
      title: 'Instruction three',
      imageUrl: 'assets/img/slides/square-3.jpg',
      instructions: 3,
    },
  ];

  constructor(public viewCtrl: ViewController) { }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}