import { Cart } from './cart.model';
import { Ingredient } from './ingredient.model';

export interface CartItem {
    id?: number;
    ingredient?: Ingredient;
    cart?: Cart;
    subTotal?: number;
    quantity?: number;
}

