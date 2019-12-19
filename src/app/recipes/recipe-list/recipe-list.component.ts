import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  constructor(private services: ServicesService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.services.sportsType().then(
      result=>{
        console.log(result);
      }
    )
  }

}
