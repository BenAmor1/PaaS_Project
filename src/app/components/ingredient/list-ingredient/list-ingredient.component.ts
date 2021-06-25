import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ingredient } from 'src/app/models/ingredient.model';
import { IngredientsService } from 'src/app/services/ingredients.service';


@Component({
  selector: 'app-list-ingredient',
  templateUrl: './list-ingredient.component.html',
  styleUrls: ['./list-ingredient.component.css']
})
export class ListIngredientComponent implements OnInit {

  ingredients: Ingredient[] = [];
  loading: Boolean = false;
  error: string | null = null;

  constructor(
    private ingredientService: IngredientsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllIngredients();
  }
  async getAllIngredients() {
    try {
      this.loading = true;
      console.log(this.loading);
      this.ingredients = await this.ingredientService.getAll();
    } catch (error) {
      this.error = ` ${error.message} !`;
      console.error(`error while get posts : ${error.message} !`, error);
    } finally {
      this.loading = false;
      console.log('done !');
    }
  }

  deleteIngredient(id: number) {
    console.log(id);
    this.ingredientService.delete(id).then(
      value => this.getAllIngredients()
    );
  }
}
