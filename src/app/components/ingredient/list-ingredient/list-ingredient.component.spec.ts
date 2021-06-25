import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIngredientComponent } from './list-ingredient.component';

describe('ListIngredientComponent', () => {
  let component: ListIngredientComponent;
  let fixture: ComponentFixture<ListIngredientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListIngredientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
