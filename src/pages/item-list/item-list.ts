import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import {Http} from "@angular/http";

@IonicPage()
@Component({
  selector: 'page-item-list',
  templateUrl: 'item-list.html',
})
export class ItemListPage {
  items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private remoteService : RemoteServiceProvider, public http: Http) {
    this.getAllCustomers();
  }

  getAllCustomers() {
    var link = this.remoteService.getApiUrl;
    this.http.get(link+'/getProducts').map(res => res.json()).subscribe(data => {
      this.items = data; //data.data.children;
      console.log(data);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemListPage');
  }

}
