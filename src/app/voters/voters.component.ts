import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { MatSort, MatTableDataSource } from '@angular/material';

import { VotersService } from '../service/voters.service';
import { Voters } from '../model/voters';

@Component({
  selector: 'app-voters',
  templateUrl: './voters.component.html',
  styleUrls: ['./voters.component.scss']
})
export class VotersComponent implements OnInit {
  displayedColumns = ['name'];
  dataSource = new MatTableDataSource<Voters>();

  constructor(private serviceVoters: VotersService, public route:Router) {  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Voters>();
    this.serviceVoters.ReadJsonVoters().subscribe(response => {
      this.dataSource = response;
    });
  }
  back()
  {
   this.route.navigate(['home']);
  }
}
