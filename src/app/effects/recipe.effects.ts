import { RecipeService } from './../recipes/recipe.service';
import { RecipeActions } from './../actions/recipe';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Recipe } from './../recipes/recipe';

@Injectable()
export class RecipeEffects {

    constructor(
        private action$: Actions,
        private recipeActions: RecipeActions,
        private recipeService: RecipeService) { }

    // tslint:disable-next-line:member-ordering
    @Effect() loadRecipes$ = this.action$
        .ofType(RecipeActions.LOAD_RECIPES)
        .switchMap(() => this.recipeService.fetchData())
        .map((recipes: Recipe[]) => this.recipeActions.loadRecipesSuccess(recipes));

}
