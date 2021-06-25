import { Recipe} from './recipe.model';

export interface Ingredient {
    id?: number;
    reference?: string;
    name?: string;
    //recipe?: string;

    platPersonalise?: Recipe;
    quantity?: number;
    price?: number;
}
