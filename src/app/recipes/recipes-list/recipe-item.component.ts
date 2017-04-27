import { Recipe } from './../recipe';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html',
})
export class RecipeItemComponent {

  @Input() recipe: Recipe;
  @Input() recipeId: number = 1;
}
