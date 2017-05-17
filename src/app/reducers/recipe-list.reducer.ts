import { RecipeActions } from './../actions/recipe';
import { Recipe } from './../recipes/recipe';
import { Action } from '@ngrx/store';

export type RecipeListState = Recipe[];

const initialState: RecipeListState = [];

export const recipeListReducer = (state = initialState, action: Action): RecipeListState => {
    switch (action.type) {
        case RecipeActions.LOAD_RECIPES_SUCCESS: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
