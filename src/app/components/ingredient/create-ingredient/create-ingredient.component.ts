import { Recipe } from './../../../models/recipe.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ingredient } from 'src/app/models/ingredient.model';
import { IngredientsService } from 'src/app/services/ingredients.service';
import { RecipeService  } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-create-ingredient',
  templateUrl: './create-ingredient.component.html',
  styleUrls: ['./create-ingredient.component.css']
})
export class CreateIngredientComponent implements OnInit {


  // initial data
  ingredient: Ingredient;
  store_id: number;
  recipes: Recipe[];

  // Form groupe add ingredient
  ingredientForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    reference: new FormControl('', [Validators.required, Validators.minLength(3)]),
    quantity: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
   recipe: new FormControl('')
  });


  constructor(
    private ingredientService: IngredientsService,
    private recipeService: RecipeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getStores();
  }

  // Get list stores
  async getStores() {
    this.recipes = await this.recipeService.getAll();
    console.log(this.recipes)
  }

    // getters
    get name() {
      return this.ingredientForm.get('name');
    }

    get reference() {
      return this.ingredientForm.get('reference');
    }

    get quantity() {
      return this.ingredientForm.get('quantity');
    }

    get price() {
      return this.ingredientForm.get('price');
    }

    get recipe() {
      return this.ingredientForm.get('recipe');
    }


    async addIngredient() {
    this.ingredient = {
      name: this.name.value,
      reference: this.reference.value,
      quantity: this.quantity.value,
      price: this.price.value,
      platPersonalise: {
        idPlatPerso: this.recipe.value,

      }
    };
    console.log(this.ingredient)
    console.log(this.recipes)
    //const s = await
   if( this.ingredientService.create(this.ingredient)){
    this.router.navigate(['/ingredients']);

   };
    //this.router.navigate(['/ingredients']);
    //console.log(s);

    //  const s = await this.ingredientService.create(this.ingredient).then(
    //   value => this.router.navigate(['/ingredients'])
    // );
  }

}
