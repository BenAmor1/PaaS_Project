import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { RecipeIngredient } from '../models/recipe-ingredient.model';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  base_url = 'http://localhost:8080/SpringMVC/servlet/api/v1/';

  createHeaders(headers: HttpHeaders) {
    // headers.append('Authorization', 'Bearer '+localStorage.getItem('token')); // token headers
    //headers.append('Content-Type' , 'application/json');
    headers.append('Access-Control-Allow-Origin' , '*'); // Access-Control-Allow-Origin: https://www.mydomain.com
  }


  // get
  getAll(): Promise<Recipe[]> {
    const headers = new HttpHeaders();
    this.createHeaders(headers);
    return this.http.get<Recipe[]>(`${this.base_url}platperso`, {headers}).toPromise();
  }

  getRecipeById(id:number): Promise<Recipe> {
    const headers = new HttpHeaders();
    this.createHeaders(headers);
    return this.http.get<Recipe>(`${this.base_url}platperso/${id}`, {headers}).toPromise();
  }


  // post
  create(recipe: Recipe): Promise<Recipe> | undefined {
    const headers = new HttpHeaders();
    this.createHeaders(headers);
    return this.http.post<Recipe>(`${this.base_url}platperso`, recipe).toPromise();
  }

  // put (update)
  update(recipe: Recipe, recipeId:number): Promise<any> | null {
    const headers = new HttpHeaders();
    this.createHeaders(headers);
    return this.http.put<Recipe>(`${this.base_url}platperso/${recipeId}`, recipe, {headers}).toPromise();
  }

  // delete
  delete(recipe_id: number): Promise<any> | null {
    const headers = new HttpHeaders();
    this.createHeaders(headers);
    return this.http.delete<Recipe>(`${this.base_url}platperso/${recipe_id}`, {headers}).toPromise();
  }

  // Ingredient

  getAllIngredient(): Promise<Ingredient[]> {
    const headers = new HttpHeaders();
    this.createHeaders(headers);
    return this.http.get<Ingredient[]>(`${this.base_url}ingredients`, {headers}).toPromise();
  }



  //  RecipeIngredient
  // post
  createIngr(rec : number, ing :number, recIngr: RecipeIngredient): Promise<RecipeIngredient> | undefined {
    const headers = new HttpHeaders();
    this.createHeaders(headers);
    return this.http.post<RecipeIngredient>(`${this.base_url}recingredient/${rec}/${ing}`, recIngr).toPromise();
  }

  // put (update)
  updateIngr(recIng : number, recIngr: RecipeIngredient): Promise<any> | null {
    const headers = new HttpHeaders();
    this.createHeaders(headers);
    return this.http.put<RecipeIngredient>(`${this.base_url}recingredient/${recIng}`, recIngr, {headers}).toPromise();
  }

  // delete
  deleteIngr(recIng: number): Promise<any> | null {
    const headers = new HttpHeaders();
    this.createHeaders(headers);
    return this.http.delete<RecipeIngredient>(`${this.base_url}recingredient/${recIng}`, {headers}).toPromise();
  }

  getRecIngById(id:number): Promise<RecipeIngredient> {
    const headers = new HttpHeaders();
    this.createHeaders(headers);
    return this.http.get<RecipeIngredient>(`${this.base_url}recingredient/${id}`, {headers}).toPromise();
  }

}
