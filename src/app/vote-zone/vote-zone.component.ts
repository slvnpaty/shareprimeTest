import { Component, OnInit } from '@angular/core';
import { Category } from '../model/category';
import{CategoryService} from '../service/category.service';

@Component({
  selector: 'app-vote-zone',
  templateUrl: './vote-zone.component.html',
  styleUrls: ['./vote-zone.component.scss']
})
export class VoteZoneComponent implements OnInit {
  public categories: Category = new Category();
  constructor(public serviceCategory :CategoryService) { }

  ngOnInit() {
    this.serviceCategory.ReadJsonCategory().subscribe(res=>{
      this.categories = res;
    })
  }

}
