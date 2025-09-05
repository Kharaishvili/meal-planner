import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Recipe } from "../../types";

type RecipePlan = {
  plan: Record<number, Recipe>;
  setRecipe: (dayIndex: number, recipe: Recipe) => void;
  removeRecipe: (dayIndex: number) => void;
  resetPlan: () => void;
};

export const useRecipeStore = create<RecipePlan>()(
  persist(
    (set) => ({
      plan: {},
      setRecipe: (dayIndex, recipe) =>
        set((s) => ({ plan: { ...s.plan, [dayIndex]: recipe } })),
      removeRecipe: (dayIndex) =>
        set((s) => {
          const next = { ...s.plan };
          delete next[dayIndex];
          return { plan: next };
        }),
      resetPlan: () => set({ plan: {} }),
    }),
    { name: "recipe-plan" }
  )
);
