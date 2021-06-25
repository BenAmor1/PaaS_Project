import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Recipe } from 'src/app/models/recipe.model';
import { IngredientsService } from 'src/app/services/ingredients.service';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-update-ingredient',
  templateUrl: './update-ingredient.component.html',
  styleUrls: ['./update-ingredient.component.css']
})
export class UpdateIngredientComponent implements OnInit {

  // initial data
  ingredient: Ingredient;
  idIngredient: number;
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
    private recipeService: RecipeService,
    private ingredientService: IngredientsService,
    private activatedrouter: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.getStores();
    this.getIngredientById();
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


  // initial store
  getIngredientById() {
    this.ingredient = {
      name: '',
      price: null,
      reference: '',
      quantity: null,
      platPersonalise: {idPlatPerso: null} };
    this.activatedrouter.paramMap.subscribe(result => {
      this.idIngredient = Number(result.get('id'));
      this.ingredientService.getById(this.idIngredient).then(
        ingredient => {
          this.ingredient = ingredient;
        }
      );
    });
  }

  // Get list stores
  async getStores() {
    this.recipes = await this.recipeService.getAll();
    console.log(this.recipes)
  }

  async updateIngredient() {


    this.ingredient = {
      id:this.idIngredient,

      name: this.name.value,
      reference: this.reference.value,
      quantity: this.quantity.value,
      price: this.price.value,
      platPersonalise: {
        idPlatPerso: this.recipe.value,
      }
    };
    //const r = await
    if(this.ingredientService.update(this.ingredient)){
      this.router.navigate(['/ingredients']);
    };
    //this.router.navigate(['/articles']);
    //console.log(r);
    //if(r){
    //  this.router.navigate(['/ingredients']);
   // }
    // this.ingredient.platPersonalise= {idPlatPerso: this.recipe.value};
    // this.ingredientService.update(this.ingredient).then(
    //   ingredient => this.router.navigate(['/ingredients'])
    // );
  }

}
