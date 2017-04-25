import { RecipeService } from './recipe.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe';

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe = null;

  constructor() { }

  ngOnInit() {
  }


  setNewRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
