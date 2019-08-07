import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {
    console.log("Constructor recipe-itme");
   }

  ngOnInit() {
    console.log("ng on it recipe-item");
  }

  onSelected() {
    console.log("recipe item on slected");
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
