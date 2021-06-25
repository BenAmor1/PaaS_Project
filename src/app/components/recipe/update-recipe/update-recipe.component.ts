import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-update-recipe',
  templateUrl: './update-recipe.component.html',
  styleUrls: ['./update-recipe.component.css']
})
export class UpdateRecipeComponent implements OnInit {

//   // Attributes
//   recipe: Recipe;
//   recipe_id;

//   // Form groupe add Category project
//   recipeForm: FormGroup = new FormGroup({
//     name: new FormControl('', [Validators.required, Validators.minLength(4)]),
//     time: new FormControl('', [Validators.required]),
//     nbrPersons: new FormControl('', [Validators.required]),
//     description: new FormControl('', [Validators.required])
//   });
//   constructor(private recipeService:RecipeService,
//     private router: Router,
//     private readonly route: ActivatedRoute) { }

 ngOnInit(): void {
//this.show();
}


//   get name() {
//     return this.recipeForm.get('name');
//   }

//   get time() {
//     return this.recipeForm.get('time');
//   }

//   get nbrPersons() {
//     return this.recipeForm.get('nbrPersons');
//   }

//   get description() {
//     return this.recipeForm.get('description');
//   }

//   async show()  {
//     this.route.paramMap.subscribe(params => {
//       this.recipe_id = params.get("id");
//       });
//       this.recipe = await this.recipeService.getRecipeById(this.recipe_id);
//       this.name.setValue(this.recipe.name);
//       this.time.setValue(this.recipe.time);
//       this.nbrPersons.setValue(this.recipe.nbrPersons);
//       this.description.setValue(this.recipe.description);
//   }

//   async updateRecipe(){
//     this.recipe = {
//       nomPlatPerso: this.name.value,
//       time: this.time.value,
//       nbrPersons: this.nbrPersons.value,
//       description: this.description.value
//     }
//     const r = await this.recipeService.update(this.recipe, this.recipe_id);
//     this.router.navigate(['/recipes']);
//     console.log(r);
//   }

//   deleteRecIng(id: number) {
//     console.log(id);
//     this.recipeService.deleteIngr(id);
//   }
}
