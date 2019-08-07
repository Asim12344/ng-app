import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) {
    console.log("Constructor recipe-list");
  }

  ngOnInit() {
    console.log("ng on it recipe-list");
    this.recipes = this.recipeService.getRecipes();
  }
}
