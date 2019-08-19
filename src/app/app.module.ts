import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';





import {
  MatFormFieldModule,
  MatButtonModule,
  MatSelectModule,
  MatListModule,
  MatInputModule,
  MatPaginatorModule,
  MatTableModule,
  MatSortModule,
  MatCardModule,
  MatDialogModule,
  MatToolbarModule,
  MatChipsModule,
  MatIconModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { VotersComponent } from './voters/voters.component';
import { HomeComponent } from './home/home.component';
import { VoteZoneComponent } from './vote-zone/vote-zone.component';
import { DialogOverviewExampleDialog} from './home/home.component';

import { AppComponent } from './app.component';

import { VotersService } from './service/voters.service';
import { CategoryService } from './service/category.service';


@NgModule({
  declarations: [
    AppComponent,
    VotersComponent,
    HomeComponent,
    VoteZoneComponent,
    DialogOverviewExampleDialog
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent, pathMatch: 'full' },
      { path: 'voters', component: VotersComponent },
      { path: 'vote-zone', component: VoteZoneComponent },
      { path: 'dialog-overview-example-dialog', component: DialogOverviewExampleDialog },
    ]),
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatToolbarModule,
    MatIconModule,
    MatChipsModule,
    BrowserAnimationsModule
  ],
  providers: [
    VotersService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
