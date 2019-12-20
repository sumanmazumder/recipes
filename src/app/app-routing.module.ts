import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent  } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent  } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeStartComponent} from './recipes/recipe-start/recipe-start.component';
const routes: Routes = [
  {path : '', redirectTo:'/recipes', pathMatch:'full'},
  {path: 'recipes', component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: ':id', component: RecipeDetailComponent},
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
