import {Category} from "./category.model";
import {Store} from "./store.model";

export class PlatPersoModel {
  idPlatPerso :string;
  nomPlatPerso:string;
  descrPlatPerso:string;
  category:Category;
  resto:Store;

  constructor(idPlatPerso: string, nomPlatPerso: string, descrPlatPerso: string, category: Category, resto: Store) {
    this.idPlatPerso = idPlatPerso;
    this.nomPlatPerso = nomPlatPerso;
    this.descrPlatPerso = descrPlatPerso;
    this.category = category;
    this.resto = resto;
  }
}
