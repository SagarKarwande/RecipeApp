import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState } from './../reducers/reducers';
import { Ingredient } from './../shared/ingredient';
import { Recipe } from './recipe';
import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class RecipeService {

  recipesChanged = new EventEmitter<Recipe[]>();

  recipes: Recipe[] = [];
  recipes$: Observable<Recipe[]>;

  constructor(
    private http: Http,
    private appState: Store<AppState>
  ) {
    this.recipes$ = this.appState.select('recipes');
    this.recipes$.subscribe((
      (recipes) => {
        this.recipes = recipes;
      }
    ));
  }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://recipe-app-s.firebaseio.com/recipes.json', body, headers);
  }

  fetchData() {
    return this.http.get('https://recipe-app-s.firebaseio.com/recipes.json')
      .map((response: Response) => response.json());
  }
}
