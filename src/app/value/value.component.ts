import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss']
})

export class ValueComponent implements OnInit {
  values: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getValues();
  }

  getValues(){
    return this.http.get("http://localhost:5000").subscribe(
      response => {//TODO: Inserir link da API Rest inserir um observer no lugar do subscribe
      console.log(response);
      this.values = response;
    }, error =>{
      console.log(error);
    });
  }
}
