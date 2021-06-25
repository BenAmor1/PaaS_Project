import { Ingredient } from "./ingredient.model";
import { Recipe } from "./recipe.model";

export interface RecipeIngredient {
    id?: number;
    Ingredient?: Ingredient;
    Recipe?: Recipe;
    quantity?: number;
}
