export type Unit =
  | "g"
  | "kg"
  | "oz"
  | "lb"
  | "cup"
  | "ml"
  | "tbsp"
  | "tsp"
  | "slice"
  | "item"
  | "packet"
  | "head";

export interface Ingredient {
  id: string;
  name: string;
  defaultUnit: Unit;
  possibleUnits: Unit[];
  category?: string;
  image?: string;
}

export const INGREDIENTS: Ingredient[] = [
  {
    id: "i1",
    name: "Spaghetti",
    defaultUnit: "g",
    possibleUnits: ["g", "oz"],
    category: "Pasta",
  },
  {
    id: "i2",
    name: "Ground Beef",
    defaultUnit: "g",
    possibleUnits: ["g", "oz"],
    category: "Meat",
  },
  {
    id: "i3",
    name: "Marinara Sauce",
    defaultUnit: "cup",
    possibleUnits: ["cup", "tbsp"],
    category: "Sauce",
  },
  {
    id: "i4",
    name: "Olive Oil",
    defaultUnit: "tbsp",
    possibleUnits: ["tbsp", "tsp", "cup"],
    category: "Oil",
  },
  {
    id: "i5",
    name: "Chicken Breast",
    defaultUnit: "g",
    possibleUnits: ["g", "oz"],
    category: "Meat",
  },
  {
    id: "i6",
    name: "Onion",
    defaultUnit: "item",
    possibleUnits: ["item", "g"],
    category: "Vegetable",
  },
  {
    id: "i7",
    name: "Coconut Milk",
    defaultUnit: "cup",
    possibleUnits: ["cup", "tbsp"],
    category: "Dairy-free Milk",
  },
  {
    id: "i8",
    name: "Curry Powder",
    defaultUnit: "tbsp",
    possibleUnits: ["tbsp", "tsp"],
    category: "Spice",
  },
  {
    id: "i9",
    name: "Bell Pepper",
    defaultUnit: "item",
    possibleUnits: ["item", "g"],
    category: "Vegetable",
  },
  {
    id: "i10",
    name: "Carrot",
    defaultUnit: "item",
    possibleUnits: ["item", "g"],
    category: "Vegetable",
  },
  {
    id: "i11",
    name: "Broccoli Florets",
    defaultUnit: "g",
    possibleUnits: ["g", "item"],
    category: "Vegetable",
  },
  {
    id: "i12",
    name: "Bread Slice",
    defaultUnit: "item",
    possibleUnits: ["item"],
    category: "Bakery",
  },
  {
    id: "i13",
    name: "Cheddar Cheese",
    defaultUnit: "slice",
    possibleUnits: ["slice", "cup"],
    category: "Dairy",
  },
  {
    id: "i14",
    name: "Flour",
    defaultUnit: "cup",
    possibleUnits: ["cup", "g"],
    category: "Baking",
  },
  {
    id: "i15",
    name: "Egg",
    defaultUnit: "item",
    possibleUnits: ["item"],
    category: "Dairy",
  },
  {
    id: "i16",
    name: "Milk",
    defaultUnit: "cup",
    possibleUnits: ["cup", "ml"],
    category: "Dairy",
  },
  {
    id: "i17",
    name: "Baking Powder",
    defaultUnit: "tsp",
    possibleUnits: ["tsp", "tbsp"],
    category: "Baking",
  },
  {
    id: "i18",
    name: "Sugar",
    defaultUnit: "tbsp",
    possibleUnits: ["tbsp", "tsp", "cup"],
    category: "Baking",
  },
  {
    id: "i19",
    name: "Tortilla",
    defaultUnit: "item",
    possibleUnits: ["item"],
    category: "Bakery",
  },
  {
    id: "i20",
    name: "Taco Seasoning",
    defaultUnit: "packet",
    possibleUnits: ["packet", "tbsp", "tsp"],
    category: "Spice Mix",
  },
  {
    id: "i21",
    name: "Lettuce",
    defaultUnit: "head",
    possibleUnits: ["head", "cup"],
    category: "Vegetable",
  },
  {
    id: "i22",
    name: "Tomato",
    defaultUnit: "item",
    possibleUnits: ["item", "g"],
    category: "Vegetable",
  },
  {
    id: "i23",
    name: "Croutons",
    defaultUnit: "cup",
    possibleUnits: ["cup"],
    category: "Bakery",
  },
  {
    id: "i24",
    name: "Caesar Dressing",
    defaultUnit: "tbsp",
    possibleUnits: ["tbsp", "tsp", "cup"],
    category: "Condiment",
  },
  {
    id: "i25",
    name: "Parmesan Shavings",
    defaultUnit: "tbsp",
    possibleUnits: ["tbsp", "tsp", "cup"],
    category: "Dairy",
  },
  {
    id: "i26",
    name: "Oats",
    defaultUnit: "cup",
    possibleUnits: ["cup", "g"],
    category: "Grains",
  },
  {
    id: "i27",
    name: "Berries",
    defaultUnit: "cup",
    possibleUnits: ["cup", "g"],
    category: "Fruit",
  },
  {
    id: "i28",
    name: "Honey",
    defaultUnit: "tbsp",
    possibleUnits: ["tbsp", "tsp", "cup"],
    category: "Sweetener",
  },
  {
    id: "i29",
    name: "Salmon Fillet",
    defaultUnit: "item",
    possibleUnits: ["item", "g"],
    category: "Seafood",
  },
  {
    id: "i30",
    name: "Lemon",
    defaultUnit: "item",
    possibleUnits: ["item", "slice"],
    category: "Fruit",
  },
  {
    id: "i31",
    name: "Salt",
    defaultUnit: "tsp",
    possibleUnits: ["tsp", "tbsp", "g"],
    category: "Spices",
  },
  {
    id: "i32",
    name: "Pepper",
    defaultUnit: "tsp",
    possibleUnits: ["tsp", "tbsp", "g"],
    category: "Spices",
  },
  {
    id: "i33",
    name: "Mixed Vegetables",
    defaultUnit: "cup",
    possibleUnits: ["cup", "g"],
    category: "Vegetable",
  },
  {
    id: "i34",
    name: "Butter",
    defaultUnit: "tbsp",
    possibleUnits: ["tbsp", "tsp", "g"],
    category: "Dairy",
  },
];
