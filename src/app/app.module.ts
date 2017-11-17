import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { AngularFireModule } from 'angularfire2';


import { MyApp } from './app.component';
import{ HomePage } from '../pages/home/home';
import { FavoritesPage } from '../pages/favorites/favorites';
import { OffersPage } from '../pages/offers/offers';
import { SettingsPage } from '../pages/settings/settings';
import { SupportPage } from '../pages/support/support';
import { AboutPage } from '../pages/about/about';
import { AccountsettingsPage } from '../pages/accountsettings/accountsettings';

var config = {
  apiKey: "AIzaSyDbpIl4U9IiE3CvmU3i4cJgIdSNoMm2UGo",
  authDomain: "foodkart-e0c65.firebaseapp.com",
  databaseURL: "https://foodkart-e0c65.firebaseio.com",
  projectId: "foodkart-e0c65",
  storageBucket: "foodkart-e0c65.appspot.com",
  messagingSenderId: "257155531245"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FavoritesPage,
    OffersPage,
    SettingsPage,
    SupportPage,
    AboutPage,
    AccountsettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FavoritesPage,
    OffersPage,
    SettingsPage,
    SupportPage,
    AboutPage,
    AccountsettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
