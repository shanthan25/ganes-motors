import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import {Http} from "@angular/http";
import { InvoiceDetailsPage } from '../invoice-details/invoice-details';

@IonicPage()
@Component({
  selector: 'page-new-invoice',
  templateUrl: 'new-invoice.html',
})
export class NewInvoicePage {
  customers = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private remoteService : RemoteServiceProvider, public http: Http) {
    this.getAllCustomers();
  }

  invoiceDetails() {
    this.navCtrl.setRoot(InvoiceDetailsPage);
  }

  getAllCustomers() {
    var link = this.remoteService.getApiUrl;
    this.http.get(link+'/getProducts').map(res => res.json()).subscribe(data => {
      this.customers = data; //data.data.children;
      console.log(data);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewInvoicePage');
  }

}
