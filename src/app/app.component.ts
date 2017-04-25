import { ShoppingListAddComponent } from './shopping-list/shopping-list-add.component';
import { RecipesComponent } from './recipes/recipes.component';
import { HeaderComponent } from './header.component';
import { Component } from '@angular/core';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rb works!';
}
