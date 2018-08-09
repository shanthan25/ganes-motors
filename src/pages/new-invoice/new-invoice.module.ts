import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewInvoicePage } from './new-invoice';

@NgModule({
  declarations: [
    NewInvoicePage,
  ],
  imports: [
    IonicPageModule.forChild(NewInvoicePage),
  ],
})
export class NewInvoicePageModule {}
