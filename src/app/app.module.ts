import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
// import { ListStoreComponent } from './components/store/list-restaurant/list-restaurant.component';
// import { CreateStoreComponent } from './components/store/create-store/create-store.component';
// import { UpdateStoreComponent } from './components/store/update-restaurant/update-restaurant.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateIngredientComponent } from './components/ingredient/create-ingredient/create-ingredient.component';
import { ListIngredientComponent } from './components/ingredient/list-ingredient/list-ingredient.component';
import { UpdateIngredientComponent } from './components/ingredient/update-ingredient/update-ingredient.component';
import { ListRecipeComponent } from './components/recipe/list-recipe/list-recipe.component';
import { CreateRecipeComponent } from './components/recipe/create-recipe/create-recipe.component';
import { UpdateRecipeComponent } from './components/recipe/update-recipe/update-recipe.component';
import { AddIngredientRecipeComponent } from './components/recipe/add-ingredient-recipe/add-ingredient-recipe.component';
import { UpdateIngredientRecipeComponent } from './components/recipe/update-ingredient-recipe/update-ingredient-recipe.component';
import { ListArticleComponent } from './components/article/list-article/list-article.component';
import { CreateArticleComponent } from './components/article/create-article/create-article.component';
import { UpdateArticleComponent } from './components/article/update-article/update-article.component';
import { ListCategoryComponent } from './components/category/list-category/list-category.component';
import { CreateCategoryComponent } from './components/category/create-category/create-category.component';
import { UpdateCategoryComponent } from './components/category/update-category/update-category.component';

import { ListRestaurantComponent } from './components/restaurant/list-retaurants/list-restaurant.component';
import { CreateRestaurantComponent } from './components/restaurant/create-restaurant/create-restaurant.component';
import { UpdateRestaurantComponent } from './components/restaurant/update-restaurant/update-restaurant.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    // ListStoreComponent,
    // CreateStoreComponent,
    // UpdateStoreComponent,
    CreateIngredientComponent,
    ListIngredientComponent,
    UpdateIngredientComponent,
    ListRecipeComponent,
    CreateRecipeComponent,
    UpdateRecipeComponent,
    AddIngredientRecipeComponent,
    UpdateIngredientRecipeComponent,
    ListArticleComponent,
    CreateArticleComponent,
    UpdateArticleComponent,
    ListCategoryComponent,
    CreateCategoryComponent,
    UpdateCategoryComponent,
    ListRestaurantComponent,
    CreateRestaurantComponent,
    UpdateRestaurantComponent

  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
