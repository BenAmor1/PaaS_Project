import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIngredientRecipeComponent } from './update-ingredient-recipe.component';

describe('UpdateIngredientRecipeComponent', () => {
  let component: UpdateIngredientRecipeComponent;
  let fixture: ComponentFixture<UpdateIngredientRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateIngredientRecipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateIngredientRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
