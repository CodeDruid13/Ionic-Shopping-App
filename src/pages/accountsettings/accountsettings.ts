import { Component } from '@angular/core';
import { IonicPage, AlertController, LoadingController, App, ViewController,NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-accountsettings',
  templateUrl: 'accountsettings.html',
})
export class AccountsettingsPage {

  slideOneForm: FormGroup;
  submitAttempt: boolean = false;

  constructor( public viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    public app: App) {

      this.slideOneForm = formBuilder.group({
        firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        number: ['', Validators.compose([Validators.maxLength(13), Validators.pattern('[0-9]+.{9,9}'), Validators.required])],
        email: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.required])],
    });
  }

  save() {
    this.submitAttempt = true;

    if(!this.slideOneForm.valid){
      const loading = this.loadingCtrl.create({
        duration: 500
      });
  
      loading.onDidDismiss(() => {
        const alert = this.alertCtrl.create({
          title: 'Error!',
          subTitle: 'Please Check and fill all fields correctly!',
          buttons: ['Retry']
        });
        alert.present();
      });
  
      loading.present();
  }
  else {

    this.viewCtrl.dismiss();
    
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

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
