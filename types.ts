export type RootStackParamList = {
  MainTabs: undefined;
  Home: undefined;
  DailyMeals: {
    screen: "Recipe";
    params: { dayIndex: number };
  };
  Recipe: {
    dayIndex: number;
    origin: string;
  };
  RecepiesList: {
    route: { params: { dayIndex: number; origin: string } };
  };
  DrawerGroup: undefined;
  Settings: { origin: string };
};

export type HomeStackParamList = {
  Home: undefined;
};

export type DrawerParamList = {
  HomeTabs: undefined;
  MealsTabs: undefined;
  GroceryList: undefined;
  Settings: undefined;
};

export type Unit =
  | "g"
  | "kg"
  | "oz"
  | "lb"
  | "cup"
  | "tbsp"
  | "tsp"
  | "item"
  | "slice"
  | "packet";

export type RecipeIngredient = {
  ingredientId: string;
  quantity: number;
  unit: Unit;
  preparation?: string;
};

export type Recipe = {
  id: string;
  title: string;
  image: any;
  ingredients: RecipeIngredient[];
  steps: string[];
};
