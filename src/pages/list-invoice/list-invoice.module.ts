import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListInvoicePage } from './list-invoice';

@NgModule({
  declarations: [
    ListInvoicePage,
  ],
  imports: [
    IonicPageModule.forChild(ListInvoicePage),
  ],
})
export class ListInvoicePageModule {}
