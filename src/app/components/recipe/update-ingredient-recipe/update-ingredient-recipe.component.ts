import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from 'src/app/models/ingredient.model';
import { RecipeIngredient } from 'src/app/models/recipe-ingredient.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-update-ingredient-recipe',
  templateUrl: './update-ingredient-recipe.component.html',
  styleUrls: ['./update-ingredient-recipe.component.css']
})
export class UpdateIngredientRecipeComponent implements OnInit {

  recIng: any;
  ingredientId: any;
  recipeIngre: RecipeIngredient;
  Ingredients: Ingredient[];

  recipeIngreForm: FormGroup = new FormGroup({
    quantity: new FormControl('', [Validators.required, Validators.min(1)]),
    Ingredient: new FormControl('', [Validators.required]),
  });

  constructor(private recipeService:RecipeService,
    private router: Router,
    private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.init();
  }

  get quantity() {
    return this.recipeIngreForm.get('quantity');
  }
  
  get Ingredient() {
    return this.recipeIngreForm.get('Ingredient');
  }
  
  async init(){
    this.route.paramMap.subscribe(params => {
      this.recIng = params.get("id");
      });
      this.recipeIngre = await this.recipeService.getRecIngById(this.recIng);
      this.quantity.setValue(this.recipeIngre.quantity);
      this.Ingredient.setValue(this.recipeIngre.Ingredient);
      this.Ingredients = await this.recipeService.getAllIngredient();
      console.log(this.recipeService.getAllIngredient());
  }

  async updateRecipeIng(){
    this.recipeIngre = {
      quantity: this.quantity.value,
  }
    const r = await this.recipeService.updateIngr( this.recIng, this.recipeIngre);
    this.router.navigate(['/recipes']);
    console.log(r);
  }

}
