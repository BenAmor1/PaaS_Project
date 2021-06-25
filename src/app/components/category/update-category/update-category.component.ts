import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../services/category.service';
import {Category} from '../../../models/category.model';
import { ActivatedRoute, Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  // Attributes
  category: Category;
  category_id: any;

  // Form groupe add Category project
  categoryForm1: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(2)])
  });
  constructor(private categoryService: CategoryService,
              private router: Router,
              private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.show();
  }


  get title() {
    return this.categoryForm1.get('nomCat');
  }
  async show()  {
    this.route.paramMap.subscribe(params => {
      this.category_id = params.get('id');
    });
    this.category = await this.categoryService.getCategoryById(this.category_id);
    //this.title.setValue(this.category.title);
    //this.categoryForm1.controls['title'].setValue(this.category.title);
    console.log(this.category);
  }

  async updateCategory() {
    this.category = {
      nomCat: this.title.value
    };
    const r = await this.categoryService.update(this.category, this.category_id);
    this.router.navigate(['/category']);
    console.log(r);
  }

}
