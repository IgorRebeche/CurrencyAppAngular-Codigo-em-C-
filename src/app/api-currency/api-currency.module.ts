import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ApiCurrencyComponent } from './api-currency.component';

@NgModule({
  declarations: [ApiCurrencyComponent],
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [ApiCurrencyComponent]
})
export class ApiCurrencyModule {
  
 }
