import { RecipeIngredient } from './recipe-ingredient.model';
import {Category} from "./category.model";
import {Store} from "./store.model";
export interface Recipe {
  idPlatPerso?: number;
    nomPlatPerso?: string;
    description?: string;
    descrPlatPerso?: string;
    resto?: Store;
    categorie?: Category;
    ingredients?: RecipeIngredient[];
}
