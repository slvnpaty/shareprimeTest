import { Injectable } from '@angular/core';
import{HttpClient}  from '@angular/common/http';


export class CategoryService {
  result: any;
  urlToJson = 'assets/category.json';
  constructor(public http:HttpClient) { }
  ReadJsonCategory()
  {
    return this.http.get<any>(this.urlToJson);
  }
}
