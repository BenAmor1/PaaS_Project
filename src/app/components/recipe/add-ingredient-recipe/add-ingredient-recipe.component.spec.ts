import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIngredientRecipeComponent } from './add-ingredient-recipe.component';

describe('AddIngredientRecipeComponent', () => {
  let component: AddIngredientRecipeComponent;
  let fixture: ComponentFixture<AddIngredientRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIngredientRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIngredientRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
