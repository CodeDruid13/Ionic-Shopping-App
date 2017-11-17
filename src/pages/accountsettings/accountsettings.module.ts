import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountsettingsPage } from './accountsettings';

@NgModule({
  declarations: [
    AccountsettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountsettingsPage),
  ],
})
export class AccountsettingsPageModule {}
