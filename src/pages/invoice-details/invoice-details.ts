import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ItemListPage} from "../item-list/item-list";

@IonicPage()
@Component({
  selector: 'page-invoice-details',
  templateUrl: 'invoice-details.html',
})
export class InvoiceDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  addProducts() {
    this.navCtrl.setRoot(ItemListPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvoiceDetailsPage');
  }

}
