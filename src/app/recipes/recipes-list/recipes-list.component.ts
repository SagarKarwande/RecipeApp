import { AppState } from './../../reducers/reducers';
import { RecipeActions } from './../../actions/recipe';
import { RecipeService } from './../recipe.service';
import { RecipeItemComponent } from './recipe-item.component';
import { Recipe } from './../recipe';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'rb-recipes-list',
  templateUrl: './recipes-list.component.html',
})
export class RecipesListComponent implements OnInit {

  recipes$: Observable<Recipe[]>;

  constructor(
    private recipeService: RecipeService,
    private recipesAction: RecipeActions,
    private appState: Store<AppState>) {
    this.recipes$ = this.appState.select<Recipe[]>('recipes');
  }

  ngOnInit() {
    this.appState.dispatch(this.recipesAction.loadRecipes());
  }

}
