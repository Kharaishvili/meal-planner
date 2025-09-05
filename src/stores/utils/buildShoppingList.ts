import { INGREDIENTS } from "../mocks/ingredients";
import type { Recipe } from "../../../types";

export function buildShoppingList(selected: Recipe[]) {
  const map: Record<
    string,
    {
      ingredientId: string;
      name: string;
      totalQty: number;
      unit: string;
      usedIn: string[];
    }
  > = {};

  selected.forEach((r) => {
    r.ingredients.forEach((ri) => {
      const meta = INGREDIENTS.find((i) => i.id === ri.ingredientId);
      if (!meta) return;

      if (map[ri.ingredientId]) {
        map[ri.ingredientId].totalQty += ri.quantity;
        map[ri.ingredientId].usedIn.push(r.title);
      } else {
        map[ri.ingredientId] = {
          ingredientId: ri.ingredientId,
          name: meta.name,
          totalQty: ri.quantity,
          unit: ri.unit,
          usedIn: [r.title],
        };
      }
    });
  });

  return Object.values(map);
}
