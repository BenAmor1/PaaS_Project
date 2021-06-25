import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ingredient } from '../models/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  constructor(private http: HttpClient) { }

  base_url = 'http://localhost:8080/SpringMVC/servlet/api/v1/';

  createHeaders(headers: HttpHeaders) {
     headers.append('Authorization', 'Bearer '+localStorage.getItem('token')); // token headers
    headers.append('Content-Type' , 'application/json');
    headers.append('Access-Control-Allow-Origin' , '*'); // Access-Control-Allow-Origin: https://www.mydomain.com
   headers.append('Access-Control-Allow-Methods' , 'GET, POST, PUT')

  }


  // get
  getAll(): Promise<Ingredient[]> {
    const headers = new HttpHeaders();
    this.createHeaders(headers);
    console.log('ho')
    return this.http.get<Ingredient[]>(`${this.base_url}ingredients`, {headers}).toPromise();


  }

  // post
  create(ingredient: Ingredient): Promise<Ingredient> {
    const headers = new HttpHeaders();
    this.createHeaders(headers);
    return this.http.post<Ingredient>(`${this.base_url}ingredients`, ingredient, {headers}).toPromise();
  }

  // put (update)
  update(ingredient: Ingredient): Promise<any> | null {
    const headers = new HttpHeaders();
    this.createHeaders(headers);
    return this.http.put<Ingredient>(`${this.base_url}ingredients`, ingredient, {headers}).toPromise();
  }

  // delete
  delete(ingredient_id: number): Promise<any> | null {
    const headers = new HttpHeaders();
    this.createHeaders(headers);
    return this.http.delete<Ingredient>(`${this.base_url}ingredients/${ingredient_id}`, {headers}).toPromise();
  }

  // get by id
  getById(ingredient_id: number): Promise<Ingredient> | null {
    const headers = new HttpHeaders();
    this.createHeaders(headers);
    return this.http.get<Ingredient>(`${this.base_url}ingredients/${ingredient_id}`, {headers}).toPromise();
  }

}
