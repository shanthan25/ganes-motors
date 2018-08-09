import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { NewInvoicePage } from '../pages/new-invoice/new-invoice';
import { ListInvoicePage } from '../pages/list-invoice/list-invoice';
import { SettingPage } from '../pages/setting/setting';
import { InvoiceDetailsPage } from '../pages/invoice-details/invoice-details';
import { ItemListPage } from '../pages/item-list/item-list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RemoteServiceProvider } from '../providers/remote-service/remote-service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NewInvoicePage,
    ListInvoicePage,
    SettingPage,
    InvoiceDetailsPage,
    ItemListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NewInvoicePage,
    ListInvoicePage,
    SettingPage,
    InvoiceDetailsPage,
    ItemListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RemoteServiceProvider
  ]
})
export class AppModule {}
