import { Component, OnInit } from '@angular/core';
import {Category} from '../../../models/category.model';
import {CategoryService} from '../../../services/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  categorys: Category[] = [];
  loading: Boolean = false;
  error: string | null = null;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getAllCategorys();
  }

  async getAllCategorys() {
    try {
      this.loading = true;
      this.categorys = await this.categoryService.getAll();
    } catch (error) {
      this.error = ` ${error.message} !`;
      console.error(`error while get posts : ${error.message} !`, error);
    } finally {
      this.loading = false;
      //console.log('done !');
    }
  }
  deleteCategory(id: number) {
    console.log(id);
    this.categoryService.delete(id).then(
      value => this.getAllCategorys()
    );
  }
}
