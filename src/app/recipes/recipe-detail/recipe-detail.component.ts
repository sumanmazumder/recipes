import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../../services.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  public recipe :any =[];
  constructor(private services: ServicesService) { }

  ngOnInit() {
  }
  getData(){
    this.services.sportsType().then(
      result=>{
        if(result['status'] == 1){
          console.log(result);
          this.recipe = result['values'];
          console.log(this.recipe);
        }else{
          console.log("error");
        }
        
      }
    )
  }
}
