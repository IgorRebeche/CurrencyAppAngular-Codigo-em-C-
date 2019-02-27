import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestApiService } from './rest-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CurrencyConverterApp';
  restApi: any;

  
}
