import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { InputsSectionComponent } from './sections/inputs-section/inputs-section.component';
//import { ListStoreComponent } from './components/store/list-restaurant/list-restaurant.component';
//import { CreateStoreComponent } from './components/store/create-store/create-store.component';
//import { UpdateStoreComponent } from './components/store/update-restaurant/update-restaurant.component';
import { ListIngredientComponent } from './components/ingredient/list-ingredient/list-ingredient.component';
import { CreateIngredientComponent } from './components/ingredient/create-ingredient/create-ingredient.component';
import { UpdateIngredientComponent } from './components/ingredient/update-ingredient/update-ingredient.component';
import { ListRecipeComponent } from './components/recipe/list-recipe/list-recipe.component';
import { CreateRecipeComponent } from './components/recipe/create-recipe/create-recipe.component';
import { UpdateRecipeComponent } from './components/recipe/update-recipe/update-recipe.component';
import { AddIngredientRecipeComponent } from './components/recipe/add-ingredient-recipe/add-ingredient-recipe.component';
import { UpdateIngredientRecipeComponent } from './components/recipe/update-ingredient-recipe/update-ingredient-recipe.component';
import {ListArticleComponent} from './components/article/list-article/list-article.component';
import {CreateArticleComponent} from './components/article/create-article/create-article.component';
import {UpdateArticleComponent} from './components/article/update-article/update-article.component';
import {ListCategoryComponent} from './components/category/list-category/list-category.component';
import {CreateCategoryComponent} from './components/category/create-category/create-category.component';
import {UpdateCategoryComponent} from './components/category/update-category/update-category.component';


import { ListRestaurantComponent } from './components/restaurant/list-retaurants/list-restaurant.component';
import { CreateRestaurantComponent } from './components/restaurant/create-restaurant/create-restaurant.component';
import { UpdateRestaurantComponent } from './components/restaurant/update-restaurant/update-restaurant.component';
//import {ListPlatPersoComponent} from "./components/restaurant/list-plat-perso/list-plat-perso.component";

const routes: Routes = [
  //   { path: 'stores',     component: ListStoreComponent },
  //  { path: 'stores/create',     component: CreateStoreComponent },
  //  { path: 'stores/:id',     component: UpdateStoreComponent },
    { path: 'ingredients',     component: ListIngredientComponent },
    { path: 'ingredients/create',     component: CreateIngredientComponent },
    { path: 'ingredients/:id',     component: UpdateIngredientComponent },
    // Recipes
    { path: 'recipes',     component: ListRecipeComponent },
    { path: 'recipes/create',     component: CreateRecipeComponent },
    { path: 'recipes/:id',     component: UpdateRecipeComponent },
    // RecipesIngredient
    { path: 'recing/:rid',     component: AddIngredientRecipeComponent },
    { path: 'recing/update/:id',     component: UpdateIngredientRecipeComponent },
    { path: 'articles',     component: ListArticleComponent },
    { path: 'articles/create',     component: CreateArticleComponent },
    { path: 'articles/:id',     component: UpdateArticleComponent },
    { path: 'category',     component: ListCategoryComponent },
    { path: 'category/create',     component: CreateCategoryComponent },
    { path: 'category/:id',     component: UpdateCategoryComponent },


    { path: 'restaurants',     component: ListRestaurantComponent },
    { path: 'restaurant/:id',     component: CreateRestaurantComponent },
    //{ path: 'restaurant/platPerso/:id',  component:  ListPlatPersoComponent },



    // { path: 'login',          component: LoginComponent },
    // { path: '', redirectTo: 'home', pathMatch: 'full' }
    { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
