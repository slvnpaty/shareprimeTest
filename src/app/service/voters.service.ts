import { Injectable } from '@angular/core';
import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export class VotersService {
  result: any;
  urlToJson = 'assets/voters.json';
  constructor(public http:HttpClient) { }
  ReadJsonVoters()
  {
    return this.http.get<any>(this.urlToJson);
  }
}
