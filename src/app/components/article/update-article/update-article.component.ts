import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Article} from '../../../models/article.model';
import {ArticleService} from '../../../services/article.service';
import {Category} from '../../../models/category.model';
import {CategoryService} from '../../../services/category.service';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {


  // Attributes
  article: Article;
  idCat: Number;
  idPlat;
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
    this.show();
    this.updateArticle();

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
  async show()  {
    this.route.paramMap.subscribe(params => {
      this.idPlat = params.get("id");
      });
      this.article = await this.articleService.getById(this.idPlat);
      this.nomPlat.setValue(this.article.nomPlat);
      this.description.setValue(this.article.description);
      
  }
  async updateArticle() {
    // init object with data from form

    this.article = {
      
      nomPlat: this.nomPlat.value,
      description: this.description.value,
      categorie: {
        idCat: this.categorie.value,
      }
    };
    const r = await this.articleService.update(this.article,this.idPlat);
    this.router.navigate(['/articles']);
    console.log(r);
  }


}