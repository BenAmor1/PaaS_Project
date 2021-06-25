import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Category} from '../models/category.model';
import {Article} from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  base_url = 'http://localhost:8080/SpringMVC/servlet/api/v1/';

  createHeaders(headers: HttpHeaders) {
    // headers.append('Authorization', 'Bearer '+localStorage.getItem('token')); // token headers
    headers.append('Content-Type' , 'application/json');
    headers.append('Access-Control-Allow-Origin' , '*'); // Access-Control-Allow-Origin: https://www.mydomain.com
  }
  // get
  getAll(): Promise<Category[]> {
    const headers = new HttpHeaders();
    this.createHeaders(headers);
    return this.http.get<Category[]>(`${this.base_url}Categ`, {headers}).toPromise();
  }

  // post
  create(category: Category): Promise<Category> {
    const headers = new HttpHeaders();
    this.createHeaders(headers);
    return this.http.post<Category>(`${this.base_url}category`, category, {headers}).toPromise();
  }

  // put (update)
  update(category: Category, categoryId: number): Promise<any> | null {
    const headers = new HttpHeaders();
    this.createHeaders(headers);
    return this.http.put<Category>(`${this.base_url}category/${categoryId}`, category, {headers}).toPromise();
  }
  // delete
  delete(category_id: number): Promise<any> | null {
    const headers = new HttpHeaders();
    this.createHeaders(headers);
    return this.http.delete<Category>(`${this.base_url}category/${category_id}`, {headers}).toPromise();
  }
  // get by id
  getCategoryById(id: number): Promise<Category> {
    const headers = new HttpHeaders();
    this.createHeaders(headers);
    return this.http.get<Category>(`${this.base_url}category/${id}`, {headers}).toPromise();
  }

}
