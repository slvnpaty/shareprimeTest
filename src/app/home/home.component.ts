import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Voters } from '../model/voters';
import { VotersService } from '../service/voters.service';

import { map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public voters: Voters = new Voters(); 
  constructor(public dialog: MatDialog,
    public route: Router) {
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
     
    },
      error => {

      });
  }

  ngOnInit() {
  }

  ListVoters() {
    this.route.navigate(['voters']);
  }

  vote() {
    this.openDialog();
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})

export class DialogOverviewExampleDialog {
  public voter: Voters = new Voters();
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Voters,
     public route: Router,
    public votersService: VotersService) { }

  verify() { 
    
    if (this.voter.name != null) {
      let voter = this.votersService.ReadJsonVoters().pipe(
        filter(n => n.name === this.voter.name)
      )
      alert(voter)
      if (voter != null)
         this.route.navigate(['vote-zone']);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}