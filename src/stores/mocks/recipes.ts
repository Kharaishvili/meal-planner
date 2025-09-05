import SpaghettiImage from "../../images/Spaghetti.png";
import ChickenCurry from "../../images/ChickenCurry.png";
import VegetableStiFry from "../../images/Vegetable-StirFry.png";
import GrilledCheese from "../../images/GrilledCheese.png";
import FluffyPancakes from "../../images/FluffyPancakes.png";
import Tacos from "../../images/Tacos.png";
import Caesar from "../../images/Caesar.png";
import OatmealwWthFruit from "../../images/OatmealWithFruit.png";
import Salmon from "../../images/Salmon.png";
import Omelette from "../../images/Omelette.png";

export const MOCK_RECIPES = [
  {
    id: "r1",
    title: "Spaghetti Bolognese",
    image: SpaghettiImage,
    prepTime: "10m",
    cookTime: "20m",
    servings: 2,
    ingredients: [
      { ingredientId: "i1", quantity: 200, unit: "g" },
      { ingredientId: "i2", quantity: 200, unit: "g" },
      { ingredientId: "i3", quantity: 1, unit: "cup" },
      { ingredientId: "i4", quantity: 1, unit: "tbsp" },
    ],
    steps: [
      "Cook spaghetti according to package instructions.",
      "In a pan, heat olive oil and brown the beef.",
      "Add marinara sauce, simmer 5 min, season to taste.",
      "Serve sauce over spaghetti.",
    ],
  },
  {
    id: "r2",
    title: "Chicken Curry",
    image: ChickenCurry,
    prepTime: "10m",
    cookTime: "25m",
    servings: 2,
    ingredients: [
      { ingredientId: "i6", quantity: 1, unit: "item", preparation: "chopped" },
      { ingredientId: "i5", quantity: 200, unit: "g" },
      { ingredientId: "i7", quantity: 1, unit: "cup" },
      { ingredientId: "i8", quantity: 2, unit: "tbsp" },
    ],
    steps: [
      "Sauté onion in oil until soft.",
      "Add chicken pieces and brown lightly.",
      "Stir in curry powder, then coconut milk.",
      "Simmer 15 min until chicken is cooked through.",
    ],
  },
  {
    id: "r3",
    title: "Vegetable Stir-Fry",
    image: VegetableStiFry,
    prepTime: "10m",
    cookTime: "10m",
    servings: 2,
    ingredients: [
      { ingredientId: "i10", quantity: 1, unit: "item", preparation: "sliced" },
      { ingredientId: "i11", quantity: 100, unit: "g" },
      { ingredientId: "i9", quantity: 1, unit: "item", preparation: "sliced" },
      { ingredientId: "i4", quantity: 2, unit: "tbsp" },
    ],
    steps: [
      "Heat oil in a wok, add carrots and broccoli, stir-fry 3 min.",
      "Add pepper and soy sauce, cook 2 more minutes.",
      "Serve with rice or noodles.",
    ],
  },

  {
    id: "r4",
    title: "Grilled Cheese Sandwich",
    image: GrilledCheese,
    prepTime: "5m",
    cookTime: "5m",
    servings: 1,
    ingredients: [
      { ingredientId: "i12", quantity: 2, unit: "item" },
      { ingredientId: "i13", quantity: 2, unit: "slice" },
      { ingredientId: "i4", quantity: 1, unit: "tbsp" },
    ],
    steps: [
      "Butter one side of each bread slice.",
      "Place cheese between un-buttered sides.",
      "Cook in a pan over medium heat until golden, flip and repeat.",
    ],
  },
  {
    id: "r5",
    title: "Fluffy Pancakes",
    image: FluffyPancakes,
    prepTime: "5m",
    cookTime: "10m",
    servings: 2,
    ingredients: [
      { ingredientId: "i14", quantity: 1, unit: "cup" },
      { ingredientId: "i15", quantity: 1, unit: "item" },
      { ingredientId: "i16", quantity: 1, unit: "cup" },
      { ingredientId: "i17", quantity: 1, unit: "tsp" },
      { ingredientId: "i18", quantity: 1, unit: "tbsp" },
    ],
    steps: [
      "Whisk flour, baking powder, sugar, salt in a bowl.",
      "Beat in egg and milk until smooth.",
      "Pour ⅓ cup batter per pancake on hot griddle, flip when bubbly.",
    ],
  },
  {
    id: "r6",
    title: "Basic Tacos",
    image: Tacos,
    prepTime: "10m",
    cookTime: "10m",
    servings: 4,
    ingredients: [
      { ingredientId: "i19", quantity: 8, unit: "item" },
      { ingredientId: "i2", quantity: 200, unit: "g" },
      { ingredientId: "i20", quantity: 1, unit: "packet" },
      { ingredientId: "i21", quantity: 0.5, unit: "cup" },
      { ingredientId: "i22", quantity: 1, unit: "item" },
      { ingredientId: "i13", quantity: 1, unit: "slice" },
    ],
    steps: [
      "Cook beef in pan, add seasoning and water per packet instructions.",
      "Warm tortillas in pan or microwave.",
      "Fill tortillas with beef and toppings of your choice.",
    ],
  },
  {
    id: "r7",
    title: "Caesar Salad",
    image: Caesar,
    prepTime: "10m",
    cookTime: "0m",
    servings: 2,
    ingredients: [
      { ingredientId: "i21", quantity: 1, unit: "head" },
      { ingredientId: "i23", quantity: 0.25, unit: "cup" },
      { ingredientId: "i24", quantity: 2, unit: "tbsp" },
      { ingredientId: "i25", quantity: 1, unit: "tbsp" },
    ],
    steps: [
      "Chop lettuce and place in bowl.",
      "Toss with dressing, croutons, and Parmesan.",
      "Serve immediately.",
    ],
  },
  {
    id: "r8",
    title: "Oatmeal with Fruit",
    image: OatmealwWthFruit,
    prepTime: "2m",
    cookTime: "5m",
    servings: 1,
    ingredients: [
      { ingredientId: "i26", quantity: 0.5, unit: "cup" },
      { ingredientId: "i16", quantity: 1, unit: "cup" },
      { ingredientId: "i27", quantity: 0.5, unit: "cup" },
      { ingredientId: "i28", quantity: 1, unit: "tbsp" },
    ],
    steps: [
      "Bring liquid to a boil, stir in oats.",
      "Cook 3–5 min, stirring occasionally.",
      "Top with fruit and honey.",
    ],
  },
  {
    id: "r9",
    title: "Baked Salmon",
    image: Salmon,
    prepTime: "5m",
    cookTime: "15m",
    servings: 2,
    ingredients: [
      { ingredientId: "i25", quantity: 2, unit: "item" },
      { ingredientId: "i4", quantity: 1, unit: "tbsp" },
      { ingredientId: "i29", quantity: 1, unit: "item" },
      { ingredientId: "i30", quantity: 1, unit: "tsp" },
    ],
    steps: [
      "Preheat oven to 400°F (200°C).",
      "Brush salmon with oil, season, top with lemon slices.",
      "Bake 12–15 min until flaky.",
    ],
  },
  {
    id: "r10",
    title: "Vegetable Omelette",
    image: Omelette,
    prepTime: "5m",
    cookTime: "5m",
    servings: 1,
    ingredients: [
      { ingredientId: "i15", quantity: 2, unit: "item" },
      { ingredientId: "i27", quantity: 0.25, unit: "cup" },
      { ingredientId: "i4", quantity: 1, unit: "tbsp" },
    ],
    steps: [
      "Whisk eggs with salt & pepper.",
      "Sauté veggies in butter until soft.",
      "Pour eggs over veggies, cook until set, fold and serve.",
    ],
  },
];
