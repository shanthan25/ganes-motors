import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http ,Response } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class RemoteServiceProvider {

  constructor(public http: Http) {
    console.log('Hello RemoteServiceProvider Provider');
  }

  getApiUrl : string = "http://shopapi.enxonetech.com/shop/public/api";

}
