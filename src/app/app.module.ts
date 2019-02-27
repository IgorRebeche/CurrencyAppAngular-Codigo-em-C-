import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListViewModule } from './list-view/list-view.module';
import { HttpClientModule } from '@angular/common/http';
import { RestApiService } from './rest-api.service';
import { FormInputModule } from './form-input/form-input.module';
import { ApiCurrencyModule } from './api-currency/api-currency.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListViewModule,
    FormInputModule,
    HttpClientModule,
    ApiCurrencyModule
  ],
  providers: [RestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
