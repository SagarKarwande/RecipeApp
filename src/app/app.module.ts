import { RecipeEffects } from './effects/recipe.effects';
import { Effect } from '@ngrx/effects';
import { RecipeActions } from './actions/recipe';
import { RecipeService } from './recipes/recipe.service';
import { routing } from './app.routes';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipeItemComponent } from './recipes/recipes-list/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { DropdownDirective } from './dropdown.directive';
import { RecipeStartComponent } from './recipes/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import reducer from './reducers/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingListAddComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule,
    StoreModule.provideStore(reducer),
     StoreDevtoolsModule.instrumentStore({
      maxAge: 5
    }),
    EffectsModule.run(RecipeEffects)
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    RecipeActions],
  bootstrap: [AppComponent]
})
export class AppModule { }
