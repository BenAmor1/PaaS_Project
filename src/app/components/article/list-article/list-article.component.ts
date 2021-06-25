import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import {Article} from '../../../models/article.model';
import {ArticleService} from '../../../services/article.service';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {
  articles: Article[] = [];
  loading: Boolean = false;
  error: string | null = null;
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.getAllArticles();
  }

  async getAllArticles() {
    
    try {
      this.loading = true;
      this.articles = await this.articleService.getAll();
    } catch (error) {
      this.error = ` ${error.message} !`;
      console.error(`error while get posts : ${error.message} !`, error);
    } finally {
      this.loading = false;
      console.log('done !');
    }
  }

  deleteArticle(idPlat: number) {
    console.log(idPlat);
    this.articleService.delete(idPlat).then(
      value => this.getAllArticles()
    );
  }
  


}
