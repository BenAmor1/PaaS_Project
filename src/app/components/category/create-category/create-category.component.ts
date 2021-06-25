import { Component, OnInit } from '@angular/core';
import {Article} from '../../../models/article.model';
import {Category} from '../../../models/category.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ArticleService} from '../../../services/article.service';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../../services/category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {


  // Attributes
  category: Category;
  // Form groupe add Category project
  categoryForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5)])
  });


  constructor(private categoryService: CategoryService, private router: Router,
              private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.init();
  }

  // getters
  get title() {
    return this.categoryForm.get('nomCat');
  }
  async init() {
    //this.listCateg = await this.categoryService.getAll();
  }
  // Add Category function
  async addCategory() {
    // init object with data from form
    this.category = {
      nomCat: this.title.value
    };
    const s = await this.categoryService.create(this.category);
    this.router.navigate(['/category']);
    console.log(s);
  }

}
