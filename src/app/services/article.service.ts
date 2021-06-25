import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import {Article} from '../models/article.model';
import {Category} from '../models/category.model';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {



  constructor(private http: HttpClient,private httpClient: HttpClient) { }

  base_url = 'http://localhost:8080/SpringMVC/servlet/api/v1/';


  createHeaders(headers: HttpHeaders) {
    // headers.append('Authorization', 'Bearer '+localStorage.getItem('token')); // token headers
    headers.append('Content-Type' , 'application/json');
    headers.append('Access-Control-Allow-Origin' , '*'); // Access-Control-Allow-Origin: https://www.mydomain.com
    headers.append('Access-Control-Allow-Methods' , 'GET, POST, PUT')


  }


  // get
  getAll(): Promise<Article[]> {
    const headers = new HttpHeaders();
    this.createHeaders(headers);
    return this.http.get<Article[]>(`${this.base_url}platPrin`, {headers}).toPromise();
  }

  // post http://localhost:8085/SpringMVC/servlet/api/v1/platPrin/
  create(article: Article): Promise<Article> {
    const headers = new HttpHeaders();
    this.createHeaders(headers);
    return this.http.post<Article>(`${this.base_url}platPrin`, article, {headers}).toPromise();

    /*createActivity(body: any, userId: number){
      return this.apiService.post('/activities/add/'+userId,body);
    }*/
  }

  // put (update) ${articleId} http://localhost:8085/SpringMVC/servlet/api/v1/updatePlatPrin
  update(article: Article,idPlat:number): Promise<Article> | null {
    const headers = new HttpHeaders();
    this.createHeaders(headers);
    return this.http.put<Article>(`${this.base_url}updatePlatPrin/${idPlat}`, article, {headers}).toPromise();
  }
  public updateStudents(article: any) {
    return this.http.put(this.base_url + '/updatePlatPrin', article).pipe(catchError(this.handleError));
  }
  updateEmployee(id: number, article: Article): Observable<Object>{
    return this.httpClient.put(`${this.base_url}/${id}`, article ).pipe(catchError(this.handleError));
  }

  // delete  http://localhost:8085/SpringMVC/servlet/api/v1/platPrin/{id}
  delete(id: number): Promise<any> | null {
    const headers = new HttpHeaders();
    this.createHeaders(headers);
    return this.http.delete<Article>(`${this.base_url}platPrin/${id}`, {headers}).toPromise();
  }
  // get by id http://localhost:8085/SpringMVC/servlet/api/v1/platPrin/{id}
 /* getArticleById(id: number): Promise<Article> {
    const headers = new HttpHeaders();
    this.createHeaders(headers);
    return this.http.get<Article>(`${this.base_url}platPrin/${id}`, {headers}).toPromise();
  }*/
  getArticleById(id: number){
    return this.httpClient.get<Article>(`${this.base_url}platPrin/${id}`).pipe(catchError(this.handleError));
  }
  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', httpError.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${httpError.status}, ` +
        `body was: ${httpError.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
  getById(idPlat: number): Promise<Article> | null {
    const headers = new HttpHeaders();
    this.createHeaders(headers);
    return this.http.get<Article>(`${this.base_url}platPrin/${idPlat}`, {headers}).toPromise();
  }
}


