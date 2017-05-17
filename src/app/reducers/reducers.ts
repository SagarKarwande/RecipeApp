import { Recipe } from './../recipes/recipe';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';
import { RecipeListState, recipeListReducer } from './recipe-list.reducer';

export interface AppState {
    recipes: RecipeListState;
}

export default compose(combineReducers)({
    recipes: recipeListReducer
});

