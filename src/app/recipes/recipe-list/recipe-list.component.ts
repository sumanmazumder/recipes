import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  public menu :any =[];
  constructor(private services: ServicesService, ) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.services.sportsType().then(
      result=>{
        if(result['status'] == 1){
          console.log(result);
          this.menu = result['values'];
          console.log(this.menu);
        }else{
          console.log("error");
        }
        
      }
    )
  }
  onNewRecipe(){

  }
}
