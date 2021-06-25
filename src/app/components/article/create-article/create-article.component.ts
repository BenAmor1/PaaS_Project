
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Article } from 'src/app/models/article.model';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../../models/category.model';
import { CategoryService } from '../../../services/category.service';
@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent implements OnInit {


  // Attributes
  article: Article;
  idCat: Number;
  nomCat: String;
  categories: Category[];


  // Form groupe add Category project
  articleForm: FormGroup = new FormGroup({
    nomPlat: new FormControl('', [Validators.required, Validators.minLength(5)]),
    description: new FormControl('', [Validators.required]),
    categorie: new FormControl('', [Validators.required]),

  });


  constructor(private articleService: ArticleService, private router: Router,
    private readonly route: ActivatedRoute, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();

  }
  async getCategories() {

    this.categories = await this.categoryService.getAll();

  }


  get categorie() {
    return this.articleForm.get('categorie');
  }
  //getters
  get nomPlat() {
    return this.articleForm.get('nomPlat');
  }
  get description() {
    return this.articleForm.get('description');
  }



  // Add Article function id: this.store.value,

  async addArticle() {
    // init object with data from form

    this.article = {

      nomPlat: this.nomPlat.value,
      description: this.description.value,
      categorie: {
        idCat: this.categorie.value,
      }
    };
    const s = await this.articleService.create(this.article);
    this.router.navigate(['/articles']);
    console.log(s);
  }

}
