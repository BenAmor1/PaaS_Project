
import { Category } from './category.model';
import { Store } from './store.model';

export interface Article{
    idPlat?: number;
    nomPlat?: string;
    description?: string;
    categorie?: Category;
    restaurant?: Store;
    /* idPlat?: number;
    nomPlat?: string;
    description?: string;
    author?: number;
    category?: Category; */
    
}
