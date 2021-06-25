import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {

  //  // Attributes
  //  recipe: Recipe;

  //  // Form groupe add Category project
  //  recipeForm: FormGroup = new FormGroup({
  //    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
  //    time: new FormControl('', [Validators.required]),
  //    nbrPersons: new FormControl('', [Validators.required]),
  //    description: new FormControl('', [Validators.required])
  //  });

   //constructor(private recipeService:RecipeService, private router: Router) { }

  ngOnInit(): void {
   }

  // get name() {
  //   return this.recipeForm.get('name');
  // }

  // get time() {
  //   return this.recipeForm.get('time');
  // }

  // get nbrPersons() {
  //   return this.recipeForm.get('nbrPersons');
  // }

  // get description() {
  //   return this.recipeForm.get('description');
  // }


  // async addRecipe() {
  //   // init object with data from form
  //   this.recipe = {
  //     name: this.name.value,
  //     time: this.time.value,
  //     nbrPersons: this.nbrPersons.value,
  //     description: this.description.value
  //   };
  //   const r = await this.recipeService.create(this.recipe);
  //   this.router.navigate(['/recipes']);
  //   console.log(r);
  // }

}
