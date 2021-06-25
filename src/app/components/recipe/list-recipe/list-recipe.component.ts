import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css']
})
export class ListRecipeComponent implements OnInit {

  recipes: Recipe[] = [];
  loading: Boolean = false;
  error: string | null = null;

  constructor( private recipeService: RecipeService) { 
    this.getAllRecipes();
  }

  ngOnInit(): void {
  }

  async getAllRecipes() {
    try {
      this.loading = true;
      this.recipes = await this.recipeService.getAll();
    } catch (error) {
      this.error = ` ${error.message} !`;
      console.error(`error while get posts : ${error.message} !`, error);
    } finally {
      this.loading = false;
      console.log('done !');
    }
  }

  deleteRecipe(id: number) {
    console.log(id);
    this.recipeService.delete(id);
    this.getAllRecipes();
  }
}
