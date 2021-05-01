import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe(
      'Test Name',
      'Test Description',
      'https://foxeslovelemons.com/wp-content/uploads/2019/07/Grilled-Chicken-Pizza-with-Mozzarella-Roasted-Garlic-2-1-735x1101.jpg',
    ),
    new Recipe(
      'The Second Recipe',
      'Test Description for the second recipe',
      'https://foxeslovelemons.com/wp-content/uploads/2019/07/Grilled-Chicken-Pizza-with-Mozzarella-Roasted-Garlic-2-1-735x1101.jpg',
    )
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
