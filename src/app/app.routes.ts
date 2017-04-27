import { RECIPE_ROUTES } from './recipes/recipes.routes';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
    { path: '', redirectTo: 'recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: RECIPE_ROUTES },
    { path: 'shopping-list', component: ShoppingListComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
