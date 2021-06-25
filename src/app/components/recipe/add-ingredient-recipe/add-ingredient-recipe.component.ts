import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from 'src/app/models/ingredient.model';
import { RecipeIngredient } from 'src/app/models/recipe-ingredient.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-add-ingredient-recipe',
  templateUrl: './add-ingredient-recipe.component.html',
  styleUrls: ['./add-ingredient-recipe.component.css']
})
export class AddIngredientRecipeComponent implements OnInit {

  recipe_id: any;
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
      this.recipe_id = params.get("rid");
      });
      this.Ingredients = await this.recipeService.getAllIngredient();
      console.log(this.recipeService.getAllIngredient());
  }

  async addIngredient() {
    // init object with data from 
    this.ingredientId=this.Ingredient.value;
    this.recipeIngre = {
      quantity: this.quantity.value,
    };
    // console.log(this.ingredientId);
    const r = await this.recipeService.createIngr(this.recipe_id,this.ingredientId, this.recipeIngre );
    this.router.navigate(['/recipes/']);
    // console.log(r);
  }
  
}
