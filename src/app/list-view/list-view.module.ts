import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListViewComponent } from './list-view/list-view.component';
import { ApiCurrencyModule } from '../api-currency/api-currency.module';

@NgModule({
  declarations: [ListViewComponent],
  imports: [
    CommonModule,
    ApiCurrencyModule
  ],
  exports:[
    ListViewComponent
  ]
})
export class ListViewModule { }
