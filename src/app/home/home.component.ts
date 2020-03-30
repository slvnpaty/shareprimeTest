import { Component, Inject } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import{ Voters} from '../model/voters';


/**
 * @title Dialog Overview
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public voter:Voters = new Voters();
  constructor(public dialog: MatDialog,
    public route: Router) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: this.voter
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);   
    });
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

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Voters) { }

    OK(data): void {
    this.dialogRef.close(data);

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}