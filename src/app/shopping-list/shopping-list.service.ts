import { Ingredient } from "src/app/shared/ingredient.model";

export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
