import { Injectable } from '@angular/core';
import { Action, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';

@Injectable()
export class RecipeActions {

    static LOAD_RECIPES = '[Recipe] Load Recipe';
    loadRecipes(): Action {
        return {
            type: RecipeActions.LOAD_RECIPES
        };
    }

    // tslint:disable-next-line:member-ordering
    static LOAD_RECIPES_SUCCESS = '[Recipe] Load Recipe Success';
    loadRecipesSuccess(recipes): Action {
        return {
            type: RecipeActions.LOAD_RECIPES_SUCCESS,
            payload: recipes
        };
    }
}
