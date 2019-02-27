import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {

  data = {};
  moedas = {};
  ngOnInit() {
    this.get_valores();

    
  }

  constructor(private httpClient: HttpClient){}

  get_valores(){
    this.httpClient.get("https://api.exchangeratesapi.io/latest?base=USD").subscribe((res : any[])=>{
      this.data = res;
      console.log(res);
    });
  }
  

}
