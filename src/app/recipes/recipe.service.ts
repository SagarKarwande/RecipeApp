import { Ingredient } from './../shared/ingredient';
import { Recipe } from './recipe';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {

  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://www.bavariankitchen.com/images/recipes/wiener_schnitzel2.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', []),
  ];

  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }
}
