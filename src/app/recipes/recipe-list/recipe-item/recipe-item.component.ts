import { Component, OnInit, Input } from '@angular/core';

import { from } from 'rxjs';
import { RecipeListComponent } from '../recipe-list.component';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: RecipeListComponent;
  @Input() index : number;

  constructor() { }

  ngOnInit() {
    console.log()
  }

}
