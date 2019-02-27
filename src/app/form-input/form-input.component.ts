import { Component, OnInit } from '@angular/core';
import $ from "jquery";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {

  data : any;
  constructor(private httpClient: HttpClient){}
  ngOnInit() {
    this.get_valores();
    $('.entrada a').click(function(){
      $('#selected').text($(this).text());
    });

    $('.saida a').click(function(){
      $('#selected2').text($(this).text());
    });
  }
  calcular(){

    let dado = this.data.rates[$(".entrada").text()] * $(".valor").text() ;
    console.log(dado);
  }
  
  get_valores(){
    let base = $("#selected").text();
    console.log("Base: " + base);
    this.httpClient.get("https://api.exchangeratesapi.io/latest?base=" + base).subscribe((res : any[])=>{
      this.data = res;
    let moedaConverter = parseFloat(this.data.rates[$("#selected2").text()]);
    console.log("Moeda : " + moedaConverter);
    let valor = parseFloat($(".valor").val());
    console.log("Valor : " + valor);
      let valorFinal = moedaConverter *  valor;
      $(".valorFinal").val(valorFinal)
      console.log(valorFinal);
    });
  }

}
