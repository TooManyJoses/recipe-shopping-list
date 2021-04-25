import { Component, OnInit } from '@angular/core';
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
      'Test Name',
      'Test Description',
      'https://foxeslovelemons.com/wp-content/uploads/2019/07/Grilled-Chicken-Pizza-with-Mozzarella-Roasted-Garlic-2-1-735x1101.jpg',
    )
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
