import { CartItem } from './cart-item.model';
import { Store } from './store.model';

export interface Cart {
    id?: number;
    reference?: string;
    address?: string;
    store?: Store;
    clientName?: string;
    cartItems?: CartItem[];
    total?: number;
    tva?: number;
}
