import { RecipeService } from './../recipe.service';
import { RecipeItemComponent } from './recipe-item.component';
import { Recipe } from './../recipe';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'rb-recipes-list',
  templateUrl: './recipes-list.component.html',
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [];

  @Output() recipeSelected = new EventEmitter();

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
