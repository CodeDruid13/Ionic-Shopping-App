import { Component } from '@angular/core';
import { NavController, ToastController, App, LoadingController, ViewController, ModalController, AlertController, NavParams, IonicPage } from 'ionic-angular';

import { AccountsettingsPage } from '../accountsettings/accountsettings';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  rootPage: any;
  language: any;
  currency: any;
  paymentMethod: any;

  languages = ['English', 'French', 'Russian'];
  paymentMethods = ['M-Pesa','Paypal', 'Credit Card'];
  currencies = ['Ksh', 'USD', 'EUR'];

  constructor(public navCtrl: NavController, 
              public modalCtrl: ModalController,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController,
              public app: App) { }
  
              
 openHintModal() {
                let accountmodal = this.modalCtrl.create(AccountsettingsPage);
                accountmodal.present();

                const toast = this.toastCtrl.create({
                  message: 'Please scroll down for further options',
                  duration: 3000,
                  position: 'top'
                });

                toast.present();
              }
              
              savesettings() {

                const loading = this.loadingCtrl.create({
                  duration: 500
                });
            
                loading.onDidDismiss(() => {
                  const alert = this.alertCtrl.create({
                    title: 'Success!',
                    subTitle: 'Changes have been successfully accepted.',
                    buttons: ['Dismiss']
                  });
                  alert.present();
                });
            
                loading.present();
                
              }
  }